import React from 'react';
import { Text } from 'react-native';
import uuid from 'react-native-uuid';

import * as S from './styles';
import * as G from '../../global/styles/global';
import { ITasklist } from '../../global/types';

export const ListTasklists = ({ tasklists }: { tasklists: ITasklist[] }) => {


  return (
    <G.Container>
      <G.MainContainer>
        <G.Main>
          <G.Title>Listas de tarefas</G.Title>
          {
            tasklists.length > 0 ?
              tasklists.map((n: ITasklist) => {
                const key = uuid.v4().toString();
                return (
                  <S.CardNote key={n.text}>{n.text}</S.CardNote>
                )
              })
              :
              <Text>Nenhuma lista de tarefa criada</Text>
          }
        </G.Main>
      </G.MainContainer>
    </G.Container>
  )
}