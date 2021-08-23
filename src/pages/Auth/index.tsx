import React, { useState } from 'react';
import Auth0 from 'react-native-auth0';
import * as AuthSession from 'expo-auth-session';
import { DOMAIN, CLIENT_ID } from 'react-native-dotenv';
import { Alert } from 'react-native';
const auth0 = new Auth0({ domain: DOMAIN, clientId: CLIENT_ID });
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

import * as S from './styles';
import * as G from '../../global/styles/global';
import { IUserData } from '../../global/types';

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
const requestTokenURL = 'http://0.0.0.0:8080/user/request-token';
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

  // TODO: Type this function
  // @ts-ignore
  const toQueryString = (params) => {
    return (
      '?' +
      Object.entries(params)
        .map(
          ([key, value]) =>
            // @ts-ignore
            `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
        )
        .join('&')
    );
  }

  const handleTwitterLogin = async () => {
    setIsLoading(true);
    try {
      const requestParams = toQueryString({ callback_url: redirect });
      const requestTokens = await fetch(
        requestTokenURL + requestParams
      ).then((res) => res.json());

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

      const accessParams = toQueryString({
        oauth_token: requestTokens.oauth_token,
        oauth_token_secret: requestTokens.oauth_token_secret,
        oauth_verifier: authResponse.params.oauth_verifier,
      });
      const { userData, session } = await fetch(
        accessTokenURL + accessParams
      ).then((res) => res.json());

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
