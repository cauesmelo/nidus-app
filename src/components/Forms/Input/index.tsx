import React, { useState } from 'react';
import { useEffect } from 'react';
import { TextInputProps } from 'react-native';

import { Container, Text, MaxChar } from './styles';

export const Input = ({ ...rest }: TextInputProps) => {

  const [char, setChar] = useState(280);
  const [text, setText] = useState('');

  useEffect(() => {
    setChar(280 - text.length);
  }, [text]);

  return (
    <Container >
      <Text {...rest} onChangeText={(e) => setText(e)} value={text}></Text>
      <MaxChar>{char}</MaxChar>
    </Container>
  )
}