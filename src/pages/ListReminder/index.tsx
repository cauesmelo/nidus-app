import React from 'react';

import { Text } from 'react-native';

import * as S from './styles';
import * as G from '../../global/styles/global';

export const ListReminder = ({ reminders }: any) => {

  return (
    <S.Container>
      <S.MainContainer>
        <S.Main>
          <G.Title>Lembretes criados</G.Title>
          {
            reminders.length > 0 ?
              reminders.map((r: any) => (
                <S.CardNote key={r.text}>{r.text}</S.CardNote>
              ))
              :
              <Text>Nehuma nota criada</Text>
          }
        </S.Main>
      </S.MainContainer>
    </S.Container>
  )
}