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

interface DateFormat {
  date: number;
  weekDay: string;
  month: string;
  year: number;
}

export const Header = ({ profileImage, logout }: { profileImage: string, logout: () => void }) => {
  const [display, setDisplay] = useState('none');
  const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  const weekDays = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira",
    "Quinta-feira", "Sexta-feira", "Sábado"];

  const rawDate = new Date();
  const date: DateFormat = {
    date: rawDate.getDate(),
    weekDay: weekDays[rawDate.getDay()],
    month: months[rawDate.getMonth()],
    year: rawDate.getFullYear(),
  }


  const handlePhotoPress = ({ logout }: any) => {
    if (display === 'none') setDisplay('flex');
    else setDisplay('none');
  }

  const handleLogout = () => {
    logout();
  }

  return (<Container>
    <Data>{date.date}</Data>
    <ContainerData>
      <Weekday>{date.weekDay}</Weekday>
      <Month>{date.month} {date.year}</Month>
    </ContainerData>
    <S.EndSessionContainer onPress={handlePhotoPress}>
      <UserPhoto source={{ uri: profileImage }}
      />
      <S.EndSessionButton display={display}>
        <TouchableOpacity onPress={handleLogout}>
          <Text>Deslogar</Text>
        </TouchableOpacity>
      </S.EndSessionButton>
    </S.EndSessionContainer>
  </Container>);
}