import React from 'react';
import { View, Text } from 'react-native';

import { Header } from '../../components/Header'
import { Container, Main, Footer } from './styles';
import { Menu } from '../../components/Menu';

export const Dashboard = () => {
  return (
    <Container>
      <Header></Header>
      <Main></Main>
      <Menu></Menu>
    </Container>
  )
    ;
}
