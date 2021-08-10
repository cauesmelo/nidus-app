import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import * as S from './styles';

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

  return (<S.Container>
    <S.Data>{date.date}</S.Data>
    <S.ContainerData>
      <S.Weekday>{date.weekDay}</S.Weekday>
      <S.Month>{date.month} {date.year}</S.Month>
    </S.ContainerData>
    <S.EndSessionContainer onPress={handlePhotoPress}>
      <S.UserPhoto source={{ uri: profileImage }}
      />
      <S.EndSessionButton display={display}>
        <TouchableOpacity onPress={handleLogout}>
          <Text>Deslogar</Text>
        </TouchableOpacity>
      </S.EndSessionButton>
    </S.EndSessionContainer>
  </S.Container>);
}