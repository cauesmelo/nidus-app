import React from 'react';

import {
  Container,
  ContainerData,
  Data,
  Weekday,
  Month,
  UserPhoto,
} from './styles';

export const Header = () => {
  return (<Container>
    <Data>27</Data>
    <ContainerData>
      <Weekday>Terça-feira</Weekday>
      <Month>Julho 2021</Month>
    </ContainerData>
    <UserPhoto></UserPhoto>
  </Container>);
}