import React from 'react';
import { Text } from 'react-native';
import uuid from 'react-native-uuid';
import * as G from '../../global/styles/global';
import * as S from './styles';
import { IReminder } from '../../global/types';


export const ListReminder = ({ reminders }: { reminders: IReminder[] }) => {

  return (
    <G.Container>
      <G.MainContainer>
        <G.Main>
          <G.Title>Lembretes criados</G.Title>
          {
            reminders.length > 0 ?
              reminders.map((r: IReminder) => {
                const key = uuid.v4().toString();
                return (
                  <S.CardReminder key={key}>
                    <Text>{r.text} - {r.date.toString()}</Text>
                  </S.CardReminder>
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