import React from 'react';


import { Container, LargeTitle, Logo, Title1, TwitterButton, TwitterButtonLogo, TwitterButtonText } from './styles';


export const Auth = () => {
  return (
    <Container>
      <Logo source={require('../../../assets/logo.png')} />
      <LargeTitle>Registros pessoais de forma simples e direta</LargeTitle>
      <Title1>Para prosseguir é necessário autenticar com o Twitter</Title1>
      <TwitterButton>
        <TwitterButtonLogo source={require('../../../assets/twitter.png')} />
        <TwitterButtonText>Entrar com Twitter</TwitterButtonText>
      </TwitterButton>
    </Container>
  );
}
