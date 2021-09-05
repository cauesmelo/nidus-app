import React, { useState } from 'react';
import * as S from './styles';
import { useEffect } from 'react';
import * as G from '../../../../global/styles/global';
import { TextInput } from 'react-native';
import { Button } from '../../../../components/Forms/Button';

export const AddPhone = () => {
  const [text, setText] = useState('');

  const handleGetText = (text: string) => {
    setText(text);
  }


  return (
    <S.Container>
      <S.Title1>Por favor, insira seu telefone para receber sms</S.Title1>
      <S.Input
        value={text}
        keyboardType='numeric'
        maxLength={11}
        onChangeText={(text) => setText(text)}
      />
      <S.ButtonContainer>
      <Button
        title="Salvar"
      />
      <Button
        title="Cancelar"
      />
      </S.ButtonContainer>
    </S.Container>
  )
}