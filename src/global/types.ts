export interface INote {
  text: string;
  nextNote?: INote;
}

export interface IReminder {
  text: string;
  date: Date;
}

export interface ITask {
  text: string;
  completed: boolean;
}

export interface ITasklist {
  text: string;
  complete: boolean;
  tasks: ITask[];
}

export interface ISettings {
  tweetNote: boolean;
  tweetReminder: boolean;
  tweetTasklist: boolean;
  notifyEmail: boolean;
  notifyPush: boolean;
}

export interface IUser {
  accountId: string;
  image: string;
  twitterToken: string;
  twitterSecret: string;
  twitterNick: string;
  email: string;
  createdAt: Date;
}

export interface IUserData {
  accountId: string;
  image: string;
  settings: ISettings;
  twitterToken: string;
  twitterSecret: string;
  twitterNick: string;
  email: string;
  createdAt: Date;
  notes: INote[];
  reminders: IReminder[];
  tasklists: ITasklist[];
}

export interface ICredentials {
  accessToken: string;
  expiresIn: number;
  idToken: string;
  scope: string;
  tokenType: string;
}