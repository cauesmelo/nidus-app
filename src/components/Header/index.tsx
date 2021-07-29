import React, { useState } from 'react';

import {
  Container,
  ContainerData,
  Data,
  Weekday,
  Month,
  UserPhoto,
} from './styles';

import * as S from './styles';
import { TouchableOpacity, Text } from 'react-native';
import { useEffect } from 'react';

export const Header = () => {

  const [display, setDisplay] = useState('none');

  const handlePhotoPress = () => {
    if(display === 'none') setDisplay('flex');
    else setDisplay('none');
  }

  const handleLogout = () => {
    console.log('logout')
  }

  return (<Container>
    <Data>27</Data>
    <ContainerData>
      <Weekday>Terça-feira</Weekday>
      <Month>Julho 2021</Month>
    </ContainerData>
    <S.EndSessionContainer onPress={handlePhotoPress}>
      <UserPhoto source={{ uri: 'https://pbs.twimg.com/profile_images/1371459187402760197/-k-drKxY_400x400.jpg' }}
      />
      <S.EndSessionButton display={display}>
        <TouchableOpacity onPress={handleLogout}>
          <Text>Deslogar</Text>
        </TouchableOpacity>
      </S.EndSessionButton>
    </S.EndSessionContainer>
  </Container>);
}