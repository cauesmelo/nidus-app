import React, { useState } from 'react';
import { Button } from '../../components/Forms/Button';
import * as G from '../../global/styles/global';
import * as S from './styles';
import { ITasklist } from '../../global/types';
import uuid from 'react-native-uuid';
import { Alert } from "react-native";
import { useEffect } from 'react';

export const AddTasklist = ({ setTasklists, tasklists }: { setTasklists: (tasklists: ITasklist[]) => void, tasklists: ITasklist[] }) => {

  const [tasklist, setTasklist] = useState({
    content: '',
    complete: false,
    tasks: []
  });
  const [titleActive, setTitleActive] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [addTask, setAddTask] = useState(false);
  const [charCount, setCharCount] = useState(280);
  const [checked, setChecked] = useState(false);

  const handleAddTasklist = () => {
    setTasklists([
      ...tasklists,
      tasklist
    ]);
  }

  const handleTitleChange = (title: string) => {
    setTasklist(prevState => ({
      ...prevState,
      text: title
    }));
  }

  const handleAddTask = () => {
    setAddTask(true);
  }

  const handleAddTaskCancel = () => {
    setNewTaskTitle('');
    setAddTask(false);
  }

  const handleAddTaskComplete = () => {
    setTasklist(prevState => ({
      ...prevState,
      tasks: [...tasklist.tasks, {
        text: newTaskTitle,
        completed: false,
      }]
    }));

    setNewTaskTitle('');
    setAddTask(false);
  }

  const handleTitleBlur = () => {
    setTitleActive(false);
  }

  const handleTitleFocus = () => {
    setTitleActive(true);
  }

  useEffect(() => {
    const totalCharTasks = tasklist.tasks.reduce((acc, task) => { return acc + task.text.length }, 0);
    setCharCount(
      280 - tasklist.text.length - totalCharTasks - newTaskTitle.length
    )
  }, [tasklist, newTaskTitle]);

  return (
    <G.Container>
      <G.MainContainer>
        <G.Main>
          <G.Title>Criar lista de tarefas</G.Title>
          <S.TitleInput
            placeholder="Nova lista de tarefas"
            value={tasklist.text}
            active={titleActive}
            multiline={false}
            onBlur={handleTitleBlur}
            onFocus={handleTitleFocus}
            onChangeText={(title: string) => handleTitleChange(title)}
          />

          <S.Tasks>
            {tasklist.tasks.map(
              (t) => {
                const key = uuid.v4().toString();
                return (
                  <S.Task key={key}>
                    <S.InputCheckBox
                      containerStyle={{
                        margin: 0,
                        padding: 0,
                      }}
                      checked={t.completed}
                      disabled={true}
                      onPress={() => setChecked(!checked)}
                      checkedColor="black"
                    />
                    <S.TaskText>{t.text}</S.TaskText>
                    <S.EditTask>
                      <S.Edit name="edit" ></S.Edit>
                    </S.EditTask>
                    <S.DeleteTask>
                      <S.Delete name="eraser" ></S.Delete>
                    </S.DeleteTask>
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
                  <S.Plus name="plus" ></S.Plus>
                  <S.AddTaskButtonText onPress={handleAddTask}>Adicionar tarefa</S.AddTaskButtonText>
                </S.AddTaskButton>
              )}
          </S.AddTask>

          <S.CharCount>{charCount}</S.CharCount>
          <Button title="Finalizar lista de tarefas" onPress={handleAddTasklist} disabled={tasklist.tasks.length === 0 || tasklist.text.length === 0} />
        </G.Main>
      </G.MainContainer>
    </G.Container >
  )
}