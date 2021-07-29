import React from 'react';
import { Container, LargeTitle, Logo, Title1, TwitterButton, TwitterButtonLogo, TwitterButtonText } from './styles';
import Auth0 from 'react-native-auth0';
import { DOMAIN, CLIENT_ID } from 'react-native-dotenv';
import { Alert } from 'react-native';
const auth0 = new Auth0({ domain: DOMAIN, clientId: CLIENT_ID });
import axios from 'axios';

interface AuthProps {
  navigation: any;
}

export const Auth = ({ navigation }: AuthProps) => {
  const handleTwitterLogin = async () => {
    auth0.webAuth
      .authorize({ scope: 'openid email profile' })
      .then(credentials => {
        navigation.navigate("Dashboard", {
          credentials
        });
      })
      .catch(error => {
        Alert.alert("Não foi possível autenticar.", error);
      });
  }

  return (
    <Container>
      <Logo source={require('../../../assets/logo.png')} />
      <LargeTitle>Registros pessoais de forma simples e direta</LargeTitle>
      <Title1>Para prosseguir é necessário autenticar com o Twitter</Title1>
      <TwitterButton onPress={() => handleTwitterLogin()}>
        <TwitterButtonLogo source={require('../../../assets/twitter.png')} />
        <TwitterButtonText>Entrar com Twitter</TwitterButtonText>
      </TwitterButton>
    </Container>
  );
}
