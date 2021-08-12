import React from 'react';
import { Text } from 'react-native';
import uuid from 'react-native-uuid';

import * as S from './styles';
import * as G from '../../global/styles/global';
import { ITasklist, ITask } from '../../global/types';

export const ListTasklists = ({ tasklists }: { tasklists: ITasklist[] }) => {


  return (
    <G.Container>
      <G.MainContainer>
        <G.Main>
          <G.Title>Listas de tarefas</G.Title>
          {
            tasklists.length > 0 ?
              tasklists.slice(0).reverse().map((tasklist: ITasklist) => {
                const key = uuid.v4().toString();
                return (
                  <S.CardTasklist key={key}>
                    <S.CardContainerTasklistTitle>
                      <S.CardTasklistTitle>{tasklist.text}</S.CardTasklistTitle>
                      <S.DeleteTasklist>
                        <S.Delete name="eraser" ></S.Delete>
                      </S.DeleteTasklist>
                    </S.CardContainerTasklistTitle>
                    {tasklist.tasks.map((task: ITask) => {
                      const keyTask = uuid.v4().toString();
                      return (
                        <S.Task key={keyTask}>
                          <S.InputCheckBox
                            containerStyle={{
                              margin: 0,
                              padding: 0,
                            }}
                            checked={task.completed}
                            checkedColor="black"
                          />
                          <S.TaskText>
                            {task.text}
                          </S.TaskText>
                        </S.Task>
                      )
                    })}
                  </S.CardTasklist>
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