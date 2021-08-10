import React from 'react';
import { TouchableOpacity } from 'react-native';

import * as S from './styles';

export const Menu = ({ setPage, page, test }: any) => {

  const handleNote = () => {
    setPage("ListNote")
  }

  const handleReminder = () => {
    setPage("ListReminder")
  }

  const handleSettings = () => {
    setPage("Settings")
  }

  const handleAdd = () => {
    if (page === 'ListNote') {
      setPage("AddNote")
    } else {
      setPage("AddReminder")
    }
  }

  return (
    <S.Container>
      <TouchableOpacity onPress={handleNote}>
        <S.Diary name="book"></S.Diary>
      </TouchableOpacity>

      <TouchableOpacity>
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