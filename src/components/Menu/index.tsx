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

export const Menu = () => {
  return (
    <Container>
      <TouchableOpacity>
        <Diary name="book"></Diary>
      </TouchableOpacity>
      <TouchableOpacity>
        <Todo name="list"></Todo>
      </TouchableOpacity>
      <ContainerAdd>
        <TouchableOpacity>
          <AddBackground>
            <Add name="plus"></Add>
          </AddBackground>
        </TouchableOpacity>
      </ContainerAdd>
      <TouchableOpacity>
        <Clock name="clock"></Clock></TouchableOpacity>
      <TouchableOpacity>
        <Settings name="cog"></Settings></TouchableOpacity>
    </Container>);
}