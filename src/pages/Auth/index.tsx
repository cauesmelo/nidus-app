import React, { useState } from 'react';
import * as AuthSession from 'expo-auth-session';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

import * as S from './styles';
import * as G from '../../global/styles/global';
import { IUserData, IResponseUserData } from '../../global/types';
import api, { getUser, getAccessTokens, getRequestTokens, getSettings, toQueryString, setToken } from '../../utils/api';

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

export const Auth = ({ navigation }: AuthProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const loadLocalData = async () => {
    const user = await AsyncStorage.getItem('@nidus:userData');
    const session = await AsyncStorage.getItem('@nidus:session');
    const notes = await AsyncStorage.getItem('@nidus:notes');
    const tasklists = await AsyncStorage.getItem('@nidus:tasklists');
    const reminders = await AsyncStorage.getItem('@nidus:reminders');

    // if (user) {
    //   navigation.navigate("Dashboard", JSON.parse(user));
    // }

    // await AsyncStorage.removeItem('@nidus:userData')
    setIsLoading(false);
  }

  useEffect(() => {
    loadLocalData();
  }, []);

  const handleTwitterLogin = async () => {
    setIsLoading(true);

    await AsyncStorage.removeItem('@nidus:userData');
    await AsyncStorage.removeItem('@nidus:session');
    await AsyncStorage.removeItem('@nidus:notes');
    await AsyncStorage.removeItem('@nidus:tasklists');
    await AsyncStorage.removeItem('@nidus:reminders');

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

      setToken(session.access_token);
      await AsyncStorage.setItem('@nidus:session', JSON.stringify(session));

      let userData = await getUser(userId);

      console.log(userData);
      // loadSettings
      // const settings = getSettings(userData.id);
      // console.log(settings);
      // loadNotes
      // loadReminders
      // loadTasklists

    } catch (err) {
      console.log('Server error:');
      console.log(err);
      setIsLoading(false);
      Alert.alert('Ocorreu um erro. Tente mais tarde novamente.');
    }
  }

  const test = async () => {
    const userId = await AsyncStorage.getItem('@nidus:userId').then(r => r && JSON.parse(r));
    const session= await AsyncStorage.getItem('@nidus:session').then(r => r && JSON.parse(r));

    setToken(session.access_token);

    let userData;
    if (userId && session) {
      userData = await getUser(userId)
    }
    console.log(userData);
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
        <S.TwitterButton onPress={() => test()}>
          <S.TwitterButtonLogo source={require('../../../assets/twitter.png')} />
          <S.TwitterButtonText>Entrar com Twitter</S.TwitterButtonText>
        </S.TwitterButton>
      </>
    )}
  </S.Container>)
}
