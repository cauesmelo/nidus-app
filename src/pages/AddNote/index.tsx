import React, { useState } from 'react';
import { Button } from '../../components/Forms/Button';
import { Input } from '../../components/Forms/Input';
import * as G from '../../global/styles/global';
import { INote } from '../../global/types';

export const AddNote = ({ setNotes, notes }: { setNotes: (notes: INote[]) => void, notes: INote[] }) => {

  const [text, setText] = useState('');

  const handleAddNote = () => {
    const newNote = {
      text: text
    }

    const newArrayOfNotes = notes;

    newArrayOfNotes.push(newNote);

    setNotes(newArrayOfNotes);
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
          <Button title="Inserir nota" onPress={handleAddNote} />
        </G.Main>
      </G.MainContainer>
    </G.Container>
  )
}