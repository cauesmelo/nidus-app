import React, { useState } from 'react';
import { Button } from '../../components/Forms/Button';
import * as G from '../../global/styles/global';
import * as S from './styles';
import { ITasklist, ITask, ISession } from '../../global/types';
import uuid from 'react-native-uuid';
import { postTasklist, setHeader } from '../../utils/api';
import { useEffect } from 'react';
import { Alert } from 'react-native';

export const AddTasklist = (
  { setTasklists, cancelAddTasklist, session }:
    {
      setTasklists: (tasklists: ITasklist[]) => void,
      session: ISession,
      cancelAddTasklist: () => void
    }) => {
  setHeader(session.access_token, session.user_id);
  const [titleActive, setTitleActive] = useState(false);
  const [tasklistTitle, setTasklistTitle] = useState('');
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [tasks, setTasks] = useState([] as string[]);
  const [addTask, setAddTask] = useState(false);
  const [charCount, setCharCount] = useState(280);
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleTitleChange = (title: string) => {
    setTasklistTitle(title);
  }

  const handleAddTask = () => {
    setAddTask(true);
  }

  const handleAddTaskCancel = () => {
    setNewTaskTitle('');
    setAddTask(false);
  }

  const handleAddTaskComplete = () => {
    setTasks(prevState => (
      [...prevState, newTaskTitle]));

    setNewTaskTitle('');
    setAddTask(false);
  }

  const handleTitleBlur = () => {
    setTitleActive(false);
  }

  const handleTitleFocus = () => {
    setTitleActive(true);
  }

  const handleCreateTasklist = async () => {
    setLoading(true);
    try {
      const newTasklist = await postTasklist(tasklistTitle, tasks);
      if (!newTasklist) throw new Error('Erro ao processar lembrete, verifique o servidor.')
      setTasklists([]);
    } catch (err) {
      console.log('Server error:');
      console.log(err);
      setLoading(false);
      Alert.alert('Ocorreu um erro. Tente mais tarde novamente.');
      setTasklists([]);
    }
  }

  useEffect(() => {
    const totalCharTasks = tasks.reduce((acc, task) => { return acc + task.length }, 0);
    setCharCount(
      280 - tasklistTitle.length - totalCharTasks - newTaskTitle.length - tasks.length
    )
  }, [tasklistTitle, newTaskTitle, tasks]);

  return (
    <G.Container>
      <G.MainContainer>
        <G.Main>
          <S.ContentContainer>
            <G.Title>Criar lista de tarefas</G.Title>
            {loading ? (
              <G.Loading />
            ) : (<>
            <S.TitleInput
              placeholder="Nova lista de tarefas"
              value={tasklistTitle}
              active={titleActive}
              multiline={false}
              onBlur={handleTitleBlur}
              onFocus={handleTitleFocus}
              onChangeText={(title: string) => handleTitleChange(title)}
            />

            <S.Tasks>
              {tasks.map(
                (t) => {
                  const key = uuid.v4().toString();
                  return (
                    <S.Task key={key}>
                      {/* <S.InputCheckBox
                        containerStyle={{
                          margin: 0,
                          padding: 0,
                        }}
                        checked={false}
                        disabled={true}
                        onPress={() => setChecked(!checked)}
                        checkedColor="black"
                      /> */}
                      <S.TaskText>{t}</S.TaskText>
                      {/* <S.EditTask>
                        <S.Edit name="edit"></S.Edit>
                      </S.EditTask> */}
                      {/* <S.DeleteTask>
                        <S.Delete name="eraser" onPress={handleDeleteTask(key)}></S.Delete>
                      </S.DeleteTask> */}
                    </S.Task>
                  )
                }
              )}

            </S.Tasks>
            <S.AddTask>
              <S.BorderTop></S.BorderTop>
              {addTask ? (
                <S.AddTaskContainer>
                  <S.AddTaskInput
                    value={newTaskTitle}
                    onChangeText={(title: string) => setNewTaskTitle(title)}
                    placeholder="Nova tarefa"
                  />
                  <S.AddTaskButtonsContainer>
                    <S.AddTaskButtonComplete onPress={handleAddTaskComplete}>
                      <S.AddTaskButtonCompleteText>
                        Concluir
                      </S.AddTaskButtonCompleteText>
                    </S.AddTaskButtonComplete>
                    <S.AddTaskButtonCancel onPress={handleAddTaskCancel}>
                      <S.AddTaskButtonCancelText>
                        Cancelar
                      </S.AddTaskButtonCancelText>
                    </S.AddTaskButtonCancel>
                  </S.AddTaskButtonsContainer>
                </S.AddTaskContainer>
              )
                :
                (
                  <S.AddTaskButton>
                    <S.Plus name="plus" />
                    <S.AddTaskButtonText
                      onPress={handleAddTask}>
                      Adicionar tarefa
                    </S.AddTaskButtonText>
                  </S.AddTaskButton>
                )}
            </S.AddTask>

            <S.CharCount>{charCount}</S.CharCount>
            <Button title="Finalizar lista de tarefas"
              onPress={handleCreateTasklist}
              disabled={tasks.length === 0 || tasklistTitle.length === 0}
            />

            <Button title="Cancelar"
              onPress={cancelAddTasklist}
            />
            </>
            )}

          </S.ContentContainer>

        </G.Main>
      </G.MainContainer>
    </G.Container >
  )
}