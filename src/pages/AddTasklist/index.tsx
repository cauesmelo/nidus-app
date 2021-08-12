import React, { useState } from 'react';
import { Input } from '../../components/Forms/Input';
import { Button } from '../../components/Forms/Button';
import * as G from '../../global/styles/global';
import { ITasklist } from '../../global/types';

export const AddTasklist = ({ setTasklists, tasklists }: { setTasklists: (tasklists: ITasklist[]) => void, tasklists: ITasklist[] }) => {
  const [text, setText] = useState('');

  const handleAddTasklist = () => {
    const newTasklist = {
      text: text,
      complete: false,
      tasks: [],
    }

    const newArrayOfTasklists = tasklists;

    newArrayOfTasklists.push(newTasklist);

    setTasklists(newArrayOfTasklists);
  }

  const handleGetText = (text: string) => {
    setText(text);
  }

  return (
    <G.Container>
      <G.MainContainer>
        <G.Main>
          <G.Title>Criar lista de tarefas</G.Title>
          <Input placeholder="Insira o titulo da lista aqui" multiline={false}
            maxLength={280} getText={(r: string) => handleGetText(r)}
          />
          <Button title="Inserir lembrete" onPress={handleAddTasklist} />
        </G.Main>
      </G.MainContainer>
    </G.Container>
  )
}