import React from 'react';

import { Header } from '../../components/Header'
import { Container, Main, MainContainer } from './styles';
import { Menu } from '../../components/Menu';
import { Input } from '../../components/Forms/Input';
import { Button } from '../../components/Forms/Button';

export const AddReminder = () => {

  return (
    <Container>
      <Header/>
      <MainContainer>
      <Main>
        <Input placeholder="Insira a descrição do seu lembrete aqui" multiline={true}
        maxLength={280}
        ></Input>
        <Button title="Inserir lembrete"></Button>
      </Main>
      </MainContainer>
      <Menu/>
    </Container>
  )
}