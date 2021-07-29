import React, { useState } from 'react';
import { Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Container, Main, MainContainer } from './styles';
import { Input } from '../../components/Forms/Input';
import { Button } from '../../components/Forms/Button';
import * as G from '../../global/styles/global';
import { useEffect } from 'react';

export const AddReminder = ({ setReminders, reminders }: any) => {

  const [text, setText] = useState('');
  const [date, setDate] = useState<Date>(new Date(Date.now()));
  const [mode, setMode] = useState('datetime');

  const onChange = (event, selectedDate) => {
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
    <Container>
      <MainContainer>
        <Main>
          <G.Title>Criar lembrete</G.Title>
          <Input placeholder="Insira seu lembrete aqui" multiline={true}
            maxLength={280} getText={(r: string) => handleGetText(r)}
          />
          <DateTimePicker
            style={{ width: '100%', backgroundColor: 'white' }}
            testID="dateTimePicker"
            value={date}
            display="spinner"
            mode='datetime'
            is24Hour={true}
            onChange={onChange}
          />
          <Button title="Inserir lembrete" onPress={handleAddReminder} />
        </Main>
      </MainContainer>
    </Container>
  )
}