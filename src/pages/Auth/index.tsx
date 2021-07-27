import React from 'react';
import { Container, LargeTitle, Logo, Title1, TwitterButton, TwitterButtonLogo, TwitterButtonText } from './styles';
import Auth0 from 'react-native-auth0';
const auth0 = new Auth0({ domain: 'nidus.us.auth0.com', clientId: 'eSQfOisEpMB2M19FCt7bOWTHAGgptf7n' });

export const Auth = () => {
  const teste = async () => {
    console.log('vapo')
    auth0.webAuth
      .authorize({ scope: 'openid email profile' })
      .then(credentials => console.log(credentials))
      .catch(error => console.log(error));
  }

  return (
    <Container>
      <Logo source={require('../../../assets/logo.png')} />
      <LargeTitle>Registros pessoais de forma simples e direta</LargeTitle>
      <Title1>Para prosseguir é necessário autenticar com o Twitter</Title1>
      <TwitterButton onPress={() => teste()}>
        <TwitterButtonLogo source={require('../../../assets/twitter.png')} />
        <TwitterButtonText>Entrar com Twitter</TwitterButtonText>
      </TwitterButton>
    </Container>
  );
}
