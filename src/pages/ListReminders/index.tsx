import React from 'react';
import { Text } from 'react-native';
import uuid from 'react-native-uuid';
import * as G from '../../global/styles/global';
import * as S from './styles';
import { IReminder } from '../../global/types';


export const ListReminders = ({ reminders }: { reminders: IReminder[] }) => {

  const formatDate = (date: Date) => {
    const parsedDate = new Date(date.toString() + '+00:00');
    const formatted = `${parsedDate.getDate()}/${parsedDate.getMonth() + 1}/${parsedDate.getFullYear()} - ${parsedDate.getHours() < 10 ? '0' + parsedDate.getHours() : parsedDate.getHours()}:${parsedDate.getMinutes() < 10 ? '0' + parsedDate.getMinutes() : parsedDate.getMinutes()}`
    return formatted;
  }

  return (
    <G.Container>
      <G.MainContainer>
        <G.Main>
          <G.Title>Lembretes</G.Title>
          <G.ScrollContainer>
          {
            reminders.length > 0 ?
              reminders.slice(0).reverse().map((r: IReminder) => {
                const key = uuid.v4().toString();
                const dateFormatted = formatDate(r.date);
                return (
                  <S.CardReminder key={key}>
                    <S.ReminderContainer>
                    <S.ReminderTitle>{r.content}</S.ReminderTitle>
                    <S.ReminderDate>{dateFormatted}</S.ReminderDate>
                    </S.ReminderContainer>
                  </S.CardReminder>
                )
              })
              :
              <Text>Nehuma lembrete criado</Text>
          }
          </G.ScrollContainer>
        </G.Main>
      </G.MainContainer>
    </G.Container>
  )
}