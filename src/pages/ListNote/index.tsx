import React from 'react';
import { Text } from 'react-native';

import { Input } from '../../components/Forms/Input';
import { Button } from '../../components/Forms/Button';

import * as S from './styles';
import * as G from '../../global/styles/global';

export const ListNote = ({ notes }: any) => {

  return (
    <S.Container>
      <S.MainContainer>
        <S.Main>
          <G.Title>Notas criadas</G.Title>
          {
            notes.length > 0 ?
              notes.map((n: any) => (
                <S.CardNote key={n.text}>{n.text}</S.CardNote>
              ))
              :
              <Text>Nehuma nota criada</Text>
          }
        </S.Main>
      </S.MainContainer>
    </S.Container>
  )
}