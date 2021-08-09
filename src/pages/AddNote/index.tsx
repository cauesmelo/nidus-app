import React, { useState } from 'react';

import { Header } from '../../components/Header'
import { Menu } from '../../components/Menu';
import { Input } from '../../components/Forms/Input';
import { Button } from '../../components/Forms/Button';

import * as S from './styles';
import * as G from '../../global/styles/global';

interface Note {
  text: string;
}


export const AddNote = ({ setNote, notes }: any) => {

  const [text, setText] = useState('');

  const handleAddNote = () => {
    const newNote = {
      text: text
    }

    const newArrayOfNotes = notes;

    newArrayOfNotes.push(newNote);

    setNote(newArrayOfNotes);
  }

  const handleGetText = (text: string) => {
    setText(text);
  }

  return (
    <S.Container>
      <S.MainContainer>
        <S.Main>
          <G.Title>Criar nota</G.Title>
          <Input placeholder="Insira sua nota aqui" multiline={true}
            maxLength={280} getText={(t: string) => handleGetText(t)}
          />
          <Button title="Inserir nota" onPress={handleAddNote}/>
        </S.Main>
      </S.MainContainer>
    </S.Container>
  )
}