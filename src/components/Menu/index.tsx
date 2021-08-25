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
        <S.Diary name="book" page={page}/>
      </S.ButtonDiary>

      <S.ButtonList page={page} onPress={handleTasklist}>
        <S.Todo name="list" page={page}/>
      </S.ButtonList>

      <S.ContainerAdd page={page}>
        <TouchableOpacity>
          <S.AddBackground page={page}>
            <S.Add name="plus" onPress={handleAdd} page={page}/>
          </S.AddBackground>
        </TouchableOpacity>
      </S.ContainerAdd>

      <S.ButtonClock page={page}>
        <S.Clock name="clock" onPress={handleReminder} page={page}/>
      </S.ButtonClock>

      <S.ButtonSettings page={page}>
        <S.Settings name="cog" onPress={handleSettings} page={page}/>
      </S.ButtonSettings>
    </S.Container>);
}