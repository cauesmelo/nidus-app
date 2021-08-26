import React, { useState } from 'react';
import * as AuthSession from 'expo-auth-session';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

import * as S from './styles';
import * as G from '../../global/styles/global';
import { getUser, getAccessTokens, getRequestTokens, toQueryString, setHeader } from '../../utils/api';

interface AuthProps {
  navigation: any;
}

interface AuthResult {
  type: 'error' | 'success';
  errorCode: string | null;
  error?: AuthSession.AuthError | null;
  params: {
    [key: string]: string;
  };
  authentication: AuthSession.TokenResponse | null;
  url: string;
}

const redirect = AuthSession.makeRedirectUri();
// AsyncStorage.clear();

export const Auth = ({ navigation }: AuthProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const loadLocalData = async () => {
    setIsLoading(true);
    const userData = await AsyncStorage.getItem('@nidus:userData');
    if (userData) {
      const userSaved = JSON.parse(userData);
      setHeader(userSaved.session[0].access_token, userSaved.id);
      const user = await getUser(userSaved.id);
      if(user) {
      await AsyncStorage.setItem('@nidus:userData', JSON.stringify(user));
      navigation.navigate("Dashboard", user);
      setIsLoading(false);
      } else {
        AsyncStorage.clear();
      }
    }
    setIsLoading(false);
  }

  useEffect(() => {
    loadLocalData();
  }, []);

  const handleTwitterLogin = async () => {
    setIsLoading(true);

    try {
      const requestTokens = await getRequestTokens(redirect);
      setIsLoading(false);

      const authResponse = await AuthSession.startAsync({
        authUrl:
          'https://api.twitter.com/oauth/authenticate' +
          toQueryString(requestTokens),
      }) as AuthResult;

      if (authResponse.params && authResponse.params.denied) {
        Alert.alert('Autorização não concedida. Para utilizar aplicativo é necessário autorizar.');
        setIsLoading(false);
      }
      setIsLoading(true);

      const { user_id: userId, session }:
        { user_id: string, session: any }
        = await getAccessTokens(
          requestTokens.oauth_token,
          requestTokens.oauth_token_secret,
          authResponse.params.oauth_verifier
        );

      setHeader(session.access_token, session.user_id);
      await AsyncStorage.setItem('@nidus:session', JSON.stringify(session));

      let userData = await getUser(userId);

      if (userData) {
        await AsyncStorage.setItem('@nidus:userData', JSON.stringify(userData));
        navigation.navigate("Dashboard", userData);
      } else throw Error('No response');

    } catch (err) {
      console.log('Server error:');
      console.log(err);
      setIsLoading(false);
      Alert.alert('Ocorreu um erro. Tente mais tarde novamente.');
    }
  }

  return (<S.Container>
    <S.Logo source={require('../../../assets/logo.png')} />

    {isLoading ? (
      <>
        <G.Loading size="large" />
      </>
    ) : (
      <>
        <G.LargeTitle>Registros pessoais de forma simples.</G.LargeTitle>
        <G.Title1>Para prosseguir é necessário autenticar com o Twitter</G.Title1>
        <S.TwitterButton onPress={() => handleTwitterLogin()}>
          <S.TwitterButtonLogo source={require('../../../assets/twitter.png')} />
          <S.TwitterButtonText>Entrar com Twitter</S.TwitterButtonText>
        </S.TwitterButton>
      </>
    )}
  </S.Container>)
}
