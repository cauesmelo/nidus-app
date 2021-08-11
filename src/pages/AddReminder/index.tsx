import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Input } from '../../components/Forms/Input';
import { Button } from '../../components/Forms/Button';
import * as G from '../../global/styles/global';
import { useEffect } from 'react';
import { IReminder } from '../../global/types';

export const AddReminder = ({ setReminders, reminders }: { setReminders: (reminders: IReminder[]) => void, reminders: IReminder[] }) => {

  const [text, setText] = useState('');
  const [date, setDate] = useState<Date>(new Date(Date.now()));

  const onChange = (event: any, selectedDate: Date) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const handleAddReminder = () => {
    const newReminder = {
      text: text,
      date: date
    }

    const newArrayOfReminders = reminders;

    newArrayOfReminders.push(newReminder);

    setReminders(newArrayOfReminders);
  }

  const handleGetText = (text: string) => {
    setText(text);
  }

  useEffect(() => {
    setDate(new Date(Date.now()))
  }, []);

  return (
    <G.Container>
      <G.MainContainer>
        <G.Main>
          <G.Title>Criar lembrete</G.Title>
          <Input placeholder="Insira seu lembrete aqui" multiline={true}
            maxLength={280} getText={(r: string) => handleGetText(r)}
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
          <Button title="Inserir lembrete" onPress={handleAddReminder} />
        </G.Main>
      </G.MainContainer>
    </G.Container>
  )
}