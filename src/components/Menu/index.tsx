import React from 'react';
import { TouchableOpacity } from 'react-native';

import * as S from './styles';

export const Menu = ({ setPage, page }: { setPage: (page: string) => void, page: string }) => {

  const handleNote = () => {
    setPage("ListNotes")
  }

  const handleReminder = () => {
    setPage("ListReminders")
  }

  const handleSettings = () => {
    setPage("Settings")
  }

  const handleTasklist = () => {
    setPage('ListTasklists')
  }

  const handleAdd = () => {
    switch (page) {
      case 'ListNotes':
        setPage("AddNote");
        break;
      case 'ListReminders':
        setPage('AddReminder');
        break;
      case 'ListTasklists':
        setPage('AddTasklist');
        break;
    }
  }

  return (
    <S.Container>
      <TouchableOpacity onPress={handleNote}>
        <S.Diary name="book"></S.Diary>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleTasklist}>
        <S.Todo name="list"></S.Todo>
      </TouchableOpacity>

      <S.ContainerAdd page={page}>
        <TouchableOpacity>
          <S.AddBackground>
            <S.Add name="plus" onPress={handleAdd}></S.Add>
          </S.AddBackground>
        </TouchableOpacity>
      </S.ContainerAdd>

      <TouchableOpacity>
        <S.Clock name="clock" onPress={handleReminder} page={page}></S.Clock>
      </TouchableOpacity>

      <TouchableOpacity>
        <S.Settings name="cog" onPress={handleSettings}></S.Settings>
      </TouchableOpacity>
    </S.Container>);
}