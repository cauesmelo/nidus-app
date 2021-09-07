export interface INote {
  id: string;
  tweet_id: string | undefined;
  user_id: string;
  content: string;
  created_at: Date;
}

export interface IReminder {
  id: string;
  tweet_id: string | undefined;
  user_id: string;
  content: string;
  date: Date;
  created_at: Date;
}

export interface ITask {
  id: string;
  tasklist_id: string;
  content: string;
}

export interface ITasklist {
  id: string;
  tweet_id: string | undefined;
  user_id: string;
  content: string;
  tasks: ITask[];
  created_at: Date;
}

export interface ISettings {
  id: string;
  user_id: string;
  note: boolean;
  task: boolean;
  reminder: boolean;
  email: boolean;
  push: boolean;
}

export interface IUserData {
  id: string;
  tw_profile_picture: string;
  tw_access_token: string;
  tw_access_token_verifier: string;
  tw_name: string;
  tw_email: string;
  tw_id: string;
  created_at: Date;
  settings: ISettings[];
  notes: INote[];
  reminders: IReminder[];
  tasklists: ITasklist[];
  session: ISession[];
}

export interface IUser {
  id: string;
  tw_profile_picture: string;
  tw_access_token: string;
  tw_access_token_verifier: string;
  tw_name: string;
  tw_email: string;
  tw_id: string;
  created_at: Date;
}

export interface ISession {
  id: string;
  user_id: string;
  access_token: string;
  active: boolean;
}
