import React, { useState } from 'react';
import { useEffect } from 'react';
import { TextInputProps } from 'react-native';

import { Container, Text, MaxChar } from './styles';

interface Props extends TextInputProps {
  getText: (text: string) => void;
}

export const Input = ({ getText, ...rest }: Props) => {

  const [char, setChar] = useState(280);
  const [text, setText] = useState('');

  useEffect(() => {
    setChar(280 - text.length);
    getText(text);
  }, [text]);

  return (
    <Container >
      <Text {...rest} onChangeText={(e) => setText(e)} value={text}></Text>
      <MaxChar>{char}</MaxChar>
    </Container>
  )
}