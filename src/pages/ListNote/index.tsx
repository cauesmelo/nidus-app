import React from 'react';
import { Text } from 'react-native';
import uuid from 'react-native-uuid';
import * as G from '../../global/styles/global';
import * as S from './styles';
import { INote } from '../../global/types';

export const ListNote = ({ notes }: { notes: INote[] }) => {


  return (
    <G.Container>
      <G.MainContainer>
        <G.Main>
          <G.Title>Notas criadas</G.Title>
          {
            notes.length > 0 ?
              notes.map((n: INote) => {
                const key = uuid.v4().toString();
                return (
                  <S.CardNote key={key}>{n.text}</S.CardNote>
                )
              })
              :
              <Text>Nehuma nota criada</Text>
          }
        </G.Main>
      </G.MainContainer>
    </G.Container>
  )
}