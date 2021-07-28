import React from 'react';

import { Header } from '../../components/Header'
import { Container, Main, MainContainer } from './styles';
import { Menu } from '../../components/Menu';
import { Input } from '../../components/Forms/Input';
import { Button } from '../../components/Forms/Button';

export const AddNote = () => {

  return (
    <Container>
      <Header/>
      <MainContainer>
      <Main>
        <Input placeholder="Insira sua nota aqui" multiline={true}
        maxLength={280}
        ></Input>
        <Button title="Inserir nota"></Button>
      </Main>
      </MainContainer>
      <Menu/>
    </Container>
  )
}