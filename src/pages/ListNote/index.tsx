import React from 'react';
import { Text } from 'react-native';
import uuid from 'react-native-uuid';

import * as S from './styles';
import * as G from '../../global/styles/global';

export const ListNote = ({ notes }: any) => {


  return (
    <G.Container>
      <G.MainContainer>
        <G.Main>
          <G.Title>Notas criadas</G.Title>
          {
            notes.length > 0 ?
              notes.map((n: any) => (
                <S.CardNote key={n.text}>{n.text}</S.CardNote>
              ))
              :
              <Text>Nehuma nota criada</Text>
          }
        </G.Main>
      </G.MainContainer>
    </G.Container>
  )
}