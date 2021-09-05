import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Input } from '../../components/Forms/Input';
import { Button } from '../../components/Forms/Button';
import * as G from '../../global/styles/global';
import { useEffect } from 'react';
import { IReminder, ISession } from '../../global/types';
import { postReminder, setHeader } from '../../utils/api';
import { Alert } from 'react-native';

export const AddReminder = ({ setReminders, reminders, session }:
  {
    setReminders: (reminders: IReminder[]) => void,
    reminders: IReminder[], session: ISession
  }) => {
  setHeader(session.access_token, session.user_id);
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState('');
  const [date, setDate] = useState<Date>(new Date(Date.now()));
  const [validDate, setValidDate] = useState(true);

  const onChange = (event: any, selectedDate: Date) => {
    const currentDate = selectedDate || date;
    new Date(Date.now()) <= currentDate ? setValidDate(true) : setValidDate(false);
    setDate(currentDate);
  };

  const handleAddReminder = async () => {
      setLoading(true);
      try {
        const newReminder = await postReminder(text, date);
        if (!newReminder) throw new Error('Erro ao processar lembrete, verifique o servidor.')
        // @ts-ignore
        setReminders(prevState => ([...prevState, newReminder]))
      } catch (err) {
        console.log('Server error:');
        console.log(err);
        setLoading(false);
        Alert.alert('Ocorreu um erro. Tente mais tarde novamente.');
      }
  }

  const handleGetText = (text: string) => {
    setText(text);
  }

  useEffect(() => {
    setDate(new Date(new Date(Date.now())
      .setMinutes(new Date(Date.now())
        .getMinutes() + 1)))
  }, []);

  return (
    <G.Container>
      <G.MainContainer>
        <G.Main>
          <G.Title>Criar lembrete</G.Title>
          <Input placeholder="Insira seu lembrete aqui" multiline={true}
            maxLength={260} getText={(r: string) => handleGetText(r)}
          />
          <DateTimePicker
            style={{ width: '100%', backgroundColor: 'white' }}
            testID="dateTimePicker"
            value={date}
            display="spinner"
            // @ts-ignore
            mode='datetime'
            is24Hour={true}
            // @ts-ignore
            onChange={onChange}
          />
          <Button title="Inserir lembrete" onPress={handleAddReminder}
            disabled={!validDate}
          />
        </G.Main>
      </G.MainContainer>
    </G.Container>
  )
}