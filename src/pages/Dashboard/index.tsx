import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { IUser, IUserData, ISettings, INote, IReminder, ITasklist, ISession } from '../../global/types';
import { AddNote } from '../AddNote';
import { AddReminder } from '../AddReminder';
import { AddTasklist } from '../AddTasklist';
import { ListNotes } from '../ListNotes';
import { ListReminders } from '../ListReminders';
import { ListTasklists } from '../ListTasklists';
import { Settings } from '../Settings';
import * as S from './styles';

interface DashboardProps {
  navigation: any;
  route: any;
}

export const Dashboard = ({ navigation, route }: DashboardProps) => {
  const [page, setPage] = useState('ListNotes');
  const [settings, setSettings] = useState<ISettings>({} as ISettings);
  const [user, setUser] = useState<IUser>({} as IUser);
  const [notes, setNotes] = useState<INote[]>([]);
  const [reminders, setReminders] = useState<IReminder[]>([]);
  const [tasklists, setTasklists] = useState<ITasklist[]>([]);
  const [session, setSession] = useState<ISession>({} as ISession);

  const userData: IUserData = route.params;

  useEffect(() => {
    setSettings(userData.settings[0]);
    setUser({
      id: userData.id,
      tw_profile_picture: userData.tw_profile_picture,
      tw_access_token: userData.tw_access_token,
      tw_access_token_verifier: userData.tw_access_token_verifier,
      tw_name: userData.tw_name,
      tw_email: userData.tw_email,
      tw_id: userData.tw_id,
    });
    setNotes(userData.notes);
    setReminders(userData.reminders);
    setTasklists(userData.tasklists);
    setSession(userData.session[0]);
  }, []);

  const handleAddNote = (newNote: INote[]) => {
    setNotes(newNote);
    setPage('ListNote');
  }

  const handleAddReminders = (newReminders: IReminder[]) => {
    setReminders(newReminders);
    setPage('ListReminder');
  }

  const handleAddTasklist = (newTasklists: ITasklist[]) => {
    setTasklists(newTasklists);
    setPage('ListTasklists')
  }

  const handleLogout = async () => {
    await AsyncStorage.removeItem('@nidus:userData');
    navigation.navigate("Auth");
  }
  // GAMBIARROU BB 🤫
  const renderContent = (page: string) => {
    switch (page) {
      case 'ListNotes':
        return <ListNotes notes={notes} />
      case 'AddNote':
        return <AddNote setNotes={(n: INote[]) => handleAddNote(n)} notes={notes} />
      case 'AddReminder':
        return <AddReminder setReminders={(r: IReminder[]) => handleAddReminders(r)} reminders={reminders} />
      case 'ListReminders':
        return <ListReminders reminders={reminders} />
      case 'ListTasklists':
        return <ListTasklists tasklists={tasklists} />
      case 'AddTasklist':
        return <AddTasklist setTasklists={(t: ITasklist[]) => handleAddTasklist(t)} tasklists={tasklists} />
      case 'Settings':
        return <Settings 
        setSettings={(settings: ISettings) => setSettings(settings)} 
        settings={settings} 
        session={session}
        />
    }
  }

  return (
    <S.Container>
      <Header profileImage={user.tw_profile_picture} logout={handleLogout}></Header>
      <S.Main
        bounces={page === 'Settings' ? false : true}
      >
        {renderContent(page)}
      </S.Main>
      <Menu setPage={(e: string) => setPage(e)} page={page}></Menu>
    </S.Container>
  );
}
