import React, { useState } from 'react';

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
    <G.Container>
      <G.MainContainer>
        <G.Main>
          <G.Title>Criar nota</G.Title>
          <Input placeholder="Insira sua nota aqui" multiline={true}
            maxLength={280} getText={(t: string) => handleGetText(t)}
          />
          <Button title="Inserir nota" onPress={handleAddNote}/>
        </G.Main>
      </G.MainContainer>
    </G.Container>
  )
}