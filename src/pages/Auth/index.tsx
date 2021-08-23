import React, { useState } from 'react';
import * as AuthSession from 'expo-auth-session';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

import * as S from './styles';
import * as G from '../../global/styles/global';
import { IUserData } from '../../global/types';
import * as api from '../../utils/api';

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

// DEBUG MODES
const devMockData = false;
const devforceAuth = true;

const mockedUser: IUserData = {
  accountId: '1b0c65b4-b5b0-43d3-9070-f5b712d32b78',
  image: 'https://pbs.twimg.com/profile_images/1371459187402760197/-k-drKxY_400x400.jpg',
  settings: {
    tweetNote: true,
    tweetReminder: true,
    tweetTasklist: true,
    notifyEmail: true,
    notifyPush: true
  },
  twitterToken: 'placeholder',
  twitterSecret: 'placeholder',
  twitterNick: 'caucaudev',
  email: 'cauesmelo@gmail.com',
  createdAt: new Date(Date.now()),
  notes: [],
  reminders: [],
  tasklists: []
}

const redirect = AuthSession.makeRedirectUri();
const accessTokenURL = 'http://0.0.0.0:8080/user/access-token';

export const Auth = ({ navigation }: AuthProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const loadLocalData = async () => {
    let user;
    if (devMockData) user = JSON.stringify(mockedUser);
    else if (!devforceAuth) user = await AsyncStorage.getItem('@nidus:userData')
    if (user) {
      navigation.navigate("Dashboard", JSON.parse(user));
    }

    await AsyncStorage.removeItem('@nidus:userData')
    setIsLoading(false);
  }

  useEffect(() => {
    loadLocalData();
  }, []);

  const handleTwitterLogin = async () => {
    setIsLoading(true);
    try {
      const requestTokens = await api.getRequestTokens(redirect);
      setIsLoading(false);

      const authResponse = await AuthSession.startAsync({
        authUrl:
          'https://api.twitter.com/oauth/authenticate' +
          api.toQueryString(requestTokens),
      }) as AuthResult;

      if (authResponse.params && authResponse.params.denied) {
        Alert.alert('Autorização não concedida. Para utilizar aplicativo é necessário autorizar.');
        setIsLoading(false);
      }
      setIsLoading(true);

      const { userData, session } = await api.getAcessParams(
        requestTokens.oauth_token, 
        requestTokens.oauth_token_secret, 
        authResponse.params.oauth_verifier
      )

      console.log(userData);
      console.log(session);

      await AsyncStorage.setItem('@nidus:userData', JSON.stringify(userData));
      await AsyncStorage.setItem('@nidus:session', JSON.stringify(session));

      // loadSettings
      // loadNotes
      // loadReminders
      // loadTasklists

      const user = {
        accountId: userData.id,
        image: userData,
        settings: {
          tweetNote: true,
          tweetReminder: true,
          tweetTasklist: true,
          notifyEmail: true,
          notifyPush: true
        },
        twitterToken: 'placeholder',
        twitterSecret: 'placeholder',
        twitterNick: 'caucaudev',
        email: 'cauesmelo@gmail.com',
        createdAt: new Date(Date.now()),
        notes: [],
        reminders: [],
        tasklists: []
      } as IUserData;


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
        <S.Loading size="large" />
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
