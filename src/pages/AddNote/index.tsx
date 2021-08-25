import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Button } from '../../components/Forms/Button';
import { Input } from '../../components/Forms/Input';
import * as G from '../../global/styles/global';
import { INote, ISession } from '../../global/types';
import { postNote, setHeader } from '../../utils/api';

export const AddNote = ({ setNotes, notes, session }:
  {
    setNotes: (notes: INote[]) => void, notes: INote[],
    session: ISession
  }) => {
  setHeader(session.access_token, session.user_id);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAddNote = async () => {
    setLoading(true);
    try {
      const newNote = await postNote(text);
      // @ts-ignore
      setNotes(prevState => ([...prevState, newNote]))
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

  return (
    <G.Container>
      <G.MainContainer>
        <G.Main>
          <G.Title>Criar nota</G.Title>
          {loading ? (
            <G.Loading />
          ) : (
            <>
              <Input placeholder="Insira sua nota aqui" multiline={true}
                maxLength={280} getText={(t: string) => handleGetText(t)}
              />
              <Button title="Inserir nota" onPress={handleAddNote} />
            </>
          )}

        </G.Main>
      </G.MainContainer>
    </G.Container >
  )
}