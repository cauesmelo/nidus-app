import React, { useState } from 'react';

import { Container, Main, MainContainer } from './styles';
import { Input } from '../../components/Forms/Input';
import { Button } from '../../components/Forms/Button';
import * as G from '../../global/styles/global';

export const AddReminder = ({ setReminders, reminders }: any) => {

  const [text, setText] = useState('');

  const handleAddReminder = () => {
    const newReminder = {
      text: text
    }

    const newArrayOfReminders = reminders;

    newArrayOfReminders.push(newReminder);

    setReminders(newArrayOfReminders);
  }

  const handleGetText = (text: string) => {
    setText(text);
  }

  return (
    <Container>
      <MainContainer>
        <Main>
          <G.Title>Criar lembrete</G.Title>
          <Input placeholder="Insira seu lembrete aqui" multiline={true}
            maxLength={280} getText={(r: string) => handleGetText(r)}
          />
          <Button title="Inserir lembrete" onPress={handleAddReminder}/>
        </Main>
      </MainContainer>
    </Container>
  )
}