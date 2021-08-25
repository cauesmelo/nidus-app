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
      <S.ButtonDiary page={page} onPress={handleNote}>
        <S.Diary name="book"></S.Diary>
      </S.ButtonDiary>

      <S.ButtonList page={page} onPress={handleTasklist}>
        <S.Todo name="list"></S.Todo>
      </S.ButtonList>

      <S.ContainerAdd page={page}>
        <TouchableOpacity>
          <S.AddBackground>
            <S.Add name="plus" onPress={handleAdd}></S.Add>
          </S.AddBackground>
        </TouchableOpacity>
      </S.ContainerAdd>

      <S.ButtonClock page={page}>
        <S.Clock name="clock" onPress={handleReminder}/>
      </S.ButtonClock>

      <S.ButtonSettings page={page}>
        <S.Settings name="cog" onPress={handleSettings}/>
      </S.ButtonSettings>
    </S.Container>);
}