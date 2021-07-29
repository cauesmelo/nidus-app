import React from 'react';
import { TouchableOpacity } from 'react-native';

import {
  Container,
  Diary,
  Todo,
  ContainerAdd,
  AddBackground,
  Add,
  Clock,
  Settings,
} from './styles';

import * as S from './styles';


export const Menu = ({ setPage, page, test }: any) => {

  const handleNote = () => {
    setPage("ListNote")
  }

  const handleReminder = () => {
    setPage("ListReminder")
  }

  const handleAdd = () => {
    if (page === 'ListNote') {
      setPage("AddNote")
    } else {
      setPage("AddReminder")
    }
  }

  return (
    <Container>
      <TouchableOpacity onPress={handleNote}>
        <Diary name="book"></Diary>
      </TouchableOpacity>

      <TouchableOpacity>
        <Todo name="list"></Todo>
      </TouchableOpacity>

      <ContainerAdd>
        <TouchableOpacity>
          <AddBackground>
            <Add name="plus" onPress={handleAdd}></Add>
          </AddBackground>
        </TouchableOpacity>
      </ContainerAdd>

      <TouchableOpacity>
        <Clock name="clock" onPress={handleReminder}></Clock>
      </TouchableOpacity>

      <TouchableOpacity>
        <Settings name="cog" onPress={test}></Settings>
      </TouchableOpacity>
    </Container>);
}