import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { IUser, IUserData, ISettings, INote, IReminder, ITasklist } from '../../global/types';
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

  const userData: IUserData = route.params;

  useEffect(() => {
    setSettings(userData.settings);
    setUser({
      accountId: userData.accountId,
      image: userData.image,
      twitterToken: userData.twitterToken,
      twitterSecret: userData.twitterSecret,
      twitterNick: userData.twitterNick,
      email: userData.email,
      createdAt: userData.createdAt,
    });
    setNotes(userData.notes);
    setReminders(userData.reminders);
    setTasklists(userData.tasklists);
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
        return <Settings setSettings={(settings: ISettings) => setSettings(settings)} settings={settings} />
    }
  }

  return (
    <S.Container>
      <Header profileImage={userData.image} logout={handleLogout}></Header>
      <S.Main
        bounces={page === 'Settings' ? false : true}
      >
        {renderContent(page)}
      </S.Main>
      <Menu setPage={(e: string) => setPage(e)} page={page}></Menu>
    </S.Container>
  );
}
