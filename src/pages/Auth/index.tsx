import React, { useState } from 'react';
import Auth0 from 'react-native-auth0';
import { DOMAIN, CLIENT_ID } from 'react-native-dotenv';
import { Alert } from 'react-native';
const auth0 = new Auth0({ domain: DOMAIN, clientId: CLIENT_ID });
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import uuid from 'react-native-uuid';

import * as S from './styles';
import * as G from '../../global/styles/global';

interface AuthProps {
  navigation: any;
}

interface Credentials {
  accessToken: string;
  expiresIn: number;
  idToken: string;
  scope: string;
  tokenType: string;
}

interface Note {
  text: string;
  nextNote: Note;
}

interface Reminder {
  text: string;
  date: Date;
}

interface Task {
  text: string;
  completed: boolean;
}

interface Tasklist {
  text: string;
  complete: boolean;
  tasks: Task[];
}

interface Settings {
  tweetNote: boolean;
  tweetReminder: boolean;
  tweetTasklist: boolean;
  notifyEmail: boolean;
  NotifyPush: boolean;
}

interface UserData {
  accountId: string;
  image: string;
  settings: Settings;
  twitterToken: string;
  twitterSecret: string;
  twitterNick: string;
  email: string;
  createdAt: Date;
  notes: Note[];
  reminders: Reminder[];
  tasklists: Tasklist[];
}

const developmentMode = true;

const mockedUser: UserData = {
  accountId: '1b0c65b4-b5b0-43d3-9070-f5b712d32b78',
  image: 'https://pbs.twimg.com/profile_images/1371459187402760197/-k-drKxY_400x400.jpg',
  settings: {
    tweetNote: true,
    tweetReminder: true,
    tweetTasklist: true,
    notifyEmail: true,
    NotifyPush: true
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

export const Auth = ({ navigation }: AuthProps) => {

  const loadData = async () => {
    let user;
    if (developmentMode) user = JSON.stringify(mockedUser);
    else user = await AsyncStorage.getItem('@nidus:userData')
    if (user) {
      navigation.navigate("Dashboard", JSON.parse(user));
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  const handleTwitterLogin = async () => {

    try {
      const credentials = await auth0.webAuth.authorize({ scope: 'openid email profile' });
      const newUser: UserData = {
        accountId: uuid.v4().toString(),
        image: 'placeholder',
        settings: {
          tweetNote: true,
          tweetReminder: true,
          tweetTasklist: true,
          notifyEmail: true,
          NotifyPush: true
        },
        email: 'cauesmelo@gmail.com',
        createdAt: new Date(Date.now()),
        twitterNick: 'caucau',
        twitterToken: credentials.accessToken,
        twitterSecret: credentials.idToken,
        notes: [],
        reminders: [],
        tasklists: []
      };

      await AsyncStorage.setItem('@nidus:userData', JSON.stringify(newUser));
      
      navigation.navigate("Dashboard", {
        newUser
      });
    } catch (error) {
      Alert.alert("Não foi possível autenticar.", error);
    };
  }

  return (
    <S.Container>
      <S.Logo source={require('../../../assets/logo.png')} />
      <G.LargeTitle>Registros pessoais de forma simples e direta</G.LargeTitle>
      <G.Title1>Para prosseguir é necessário autenticar com o Twitter</G.Title1>
      <S.TwitterButton onPress={() => handleTwitterLogin()}>
        <S.TwitterButtonLogo source={require('../../../assets/twitter.png')} />
        <S.TwitterButtonText>Entrar com Twitter</S.TwitterButtonText>
      </S.TwitterButton>
    </S.Container>
  );
}
