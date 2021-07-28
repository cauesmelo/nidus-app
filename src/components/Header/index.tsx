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
    <UserPhoto source={{ uri: 'https://pbs.twimg.com/profile_images/1371459187402760197/-k-drKxY_400x400.jpg'}}></UserPhoto>
  </Container>);
}