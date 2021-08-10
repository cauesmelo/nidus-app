import React from 'react';

import { Text } from 'react-native';

import * as S from './styles';
import * as G from '../../global/styles/global';

export const ListReminder = ({ reminders }: any) => {

  return (
    <G.Container>
      <G.MainContainer>
        <G.Main>
          <G.Title>Lembretes criados</G.Title>
          {
            reminders.length > 0 ?
              reminders.map((r: any) => (
                <S.CardReminder key={r.text}>
                  <Text>{r.text} - {r.date.toString()}</Text>
                </S.CardReminder>
              ))
              :
              <Text>Nehuma nota criada</Text>
          }
        </G.Main>
      </G.MainContainer>
    </G.Container>
  )
}