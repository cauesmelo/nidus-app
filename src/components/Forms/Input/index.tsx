import React, { useState } from 'react';
import { useEffect } from 'react';
import { TextInputProps } from 'react-native';

import { Container, Text, MaxChar } from './styles';

interface Props extends TextInputProps {
  getText: (text: string) => void;
}

export const Input = ({ getText, maxLength, ...rest }: Props) => {
  const [char, setChar] = useState(maxLength);
  const [text, setText] = useState('');

  useEffect(() => {
    setChar(maxLength! - text.length);
    getText(text);
  }, [text]);

  return (
    <Container >
      <Text {...rest} onChangeText={(e) => setText(e)} value={text} maxLength={maxLength}></Text>
      <MaxChar>{char}</MaxChar>
    </Container>
  )
}