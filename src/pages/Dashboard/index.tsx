import React, { useEffect, useState } from 'react';

import { Header } from '../../components/Header'
import { Menu } from '../../components/Menu';
import { ListNote } from '../ListNote';
import { ListReminder } from '../ListReminder';
import { AddNote } from '../AddNote';
import { AddReminder } from '../AddReminder';
import { Settings } from '../Settings';

import * as S from './styles';

interface DashboardProps {
  navigation: any;
  route: any;
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
  notifyPush: boolean;
}

interface User {
  accountId: string;
  image: string;
  twitterToken: string;
  twitterSecret: string;
  twitterNick: string;
  email: string;
  createdAt: Date;
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

export const Dashboard = ({ navigation, route }: DashboardProps) => {
  const [page, setPage] = useState('ListNote');
  const [settings, setSettings] = useState<Settings>({} as Settings);
  const [user, setUser] = useState<User>({} as User);
  const [notes, setNotes] = useState<Note[]>([]);
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [tasklist, setTasklist] = useState<Tasklist[]>([]);

  const userData: UserData = route.params;

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
    setTasklist(userData.tasklists);
  }, []);

  const handleAddNote = (newNote: [Note]) => {
    setNotes(newNote);
    setPage('ListNote');
  }

  const handleAddReminders = (newReminders: [Reminder]) => {
    setReminders(newReminders);
    setPage('ListReminder');
  }

  const handleLogout = async () => {
    navigation.navigate("Auth");
  }
  // GAMBIARROU BB 🤫
  const renderContent = (page: string) => {
    switch (page) {
      case 'ListNote':
        return <ListNote notes={notes} />
      case 'AddNote':
        return <AddNote setNote={(t: [Note]) => handleAddNote(t)} notes={notes} />
      case 'AddReminder':
        return <AddReminder setReminders={(r: [Reminder]) => handleAddReminders(r)} reminders={reminders} />
      case 'ListReminder':
        return <ListReminder reminders={reminders} />
      case 'Settings':
        return <Settings setSettings={(settings: Settings) => setSettings(settings)} settings={settings} />
    }
  }

  return (
    <S.Container>
      <Header profileImage={userData.image} logout={handleLogout}></Header>
      <S.Main>
        {renderContent(page)}
      </S.Main>
      <Menu setPage={(e: string) => setPage(e)} page={page}></Menu>
    </S.Container>
  )
    ;
}
