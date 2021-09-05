import React from 'react';
import { Alert, Text } from 'react-native';
import uuid from 'react-native-uuid';

import * as S from './styles';
import * as G from '../../global/styles/global';
import { ITasklist, ITask } from '../../global/types';

export const ListTasklists = ({ setTasklists, tasklists }: { setTasklists: (tasklists: ITasklist[]) => void, tasklists: ITasklist[] }) => {

  const handleDeleteTask = (id: string) => {
    Alert.alert(
      "Atenção!",
      "Deseja excluir lista de tarefas de forma permanente?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        { text: "EXCLUIR", onPress: () => {
          setTasklists(tasklists.filter(i => i.id != id));
        } }
      ]
    );
    
  }
  return (
    <G.Container>
      <G.MainContainer>
        <G.Main>
          <G.Title>Listas de tarefas</G.Title>
          <G.ScrollContainer>
          {
            tasklists.length > 0 ?
              tasklists.slice(0).reverse().map((tasklist: ITasklist) => {
                return (
                  <S.CardTasklist key={tasklist.id}>
                    <S.CardContainerTasklistTitle>
                      <S.CardTasklistTitle>{tasklist.content}</S.CardTasklistTitle>
                      <S.DeleteTasklist>
                        <S.Delete name="eraser" onPress={() => handleDeleteTask(tasklist.id)}></S.Delete>
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
                            checked={task.complete}
                            checkedColor="black"
                          />
                          <S.TaskText>
                            {task.content}
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
          </G.ScrollContainer>
        </G.Main>
      </G.MainContainer>
    </G.Container>
  )
}