import React, { useEffect } from 'react';
import { Alert, Text } from 'react-native';
import uuid from 'react-native-uuid';
import { getTasklists, deleteTasklist, setHeader } from '../../utils/api';

import * as S from './styles';
import * as G from '../../global/styles/global';
import { ITasklist, ITask, ISession } from '../../global/types';

export const ListTasklists = ({ setTasklists, tasklists, session }:
  {
    setTasklists: (tasklists: ITasklist[]) => void,
    tasklists: ITasklist[],
    session: ISession
  }) => {
  setHeader(session.access_token, session.user_id);

  const handleDeleteTask = async (id: string) => {
    Alert.alert(
      "Atenção!",
      "Deseja excluir lista de tarefas de forma permanente?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "EXCLUIR", onPress: async () => {
            await deleteTasklist(id);
            await loadTasklists();
          }
        }
      ]
    );
  }

  const loadTasklists = async () => {
    const tasklists = await getTasklists(session.user_id);
    setTasklists(tasklists);
  }

  useEffect(() => {
    loadTasklists();
  }, []);


  return (
    <G.Container>
      <G.MainContainer>
        <G.Main>
          <G.Title>Listas de tarefas</G.Title>
          <G.ScrollContainer>
            {
              tasklists.length > 0 ?
                tasklists.map((tasklist: ITasklist) => {
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
                            {/* <S.InputCheckBox
                              containerStyle={{
                                margin: 0,
                                padding: 0,
                              }}
                              checked={false}
                              checkedColor="black"
                            /> */}
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
                <S.Text>Nenhuma lista de tarefa criada</S.Text>
            }
          </G.ScrollContainer>
        </G.Main>
      </G.MainContainer>
    </G.Container>
  )
}