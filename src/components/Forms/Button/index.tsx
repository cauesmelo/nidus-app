import React, { useState } from 'react';
import { useEffect } from 'react';
import { TextInputProps, TouchableOpacityProps } from 'react-native';

import { Container, Title } from './styles';

interface Props extends TouchableOpacityProps{
  title: string;
}

export const Button = ({ title, ...rest }: Props) => {

  return (
    <Container { ...rest } >
    <Title>{title}</Title>
    </Container>
  )
}