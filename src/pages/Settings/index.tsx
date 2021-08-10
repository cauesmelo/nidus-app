import React, { useState } from 'react';

import * as S from './styles';
import * as G from '../../global/styles/global';
import { useEffect } from 'react';

interface Settings {
  tweetNote: boolean;
  tweetReminder: boolean;
  tweetTasklist: boolean;
  notifyEmail: boolean;
  notifyPush: boolean;
}

export const Settings = ({ settings, setSettings }: { settings: Settings, setSettings: (newSettings: Settings) => void }) => {

  const [notifyEmail, setNotifyEmail] = useState(settings.notifyEmail);
  const [notifyPush, setNotifyPush] = useState(settings.notifyPush);
  const [tweetNote, setTweetNote] = useState(settings.tweetNote);
  const [tweetReminder, setTweetReminder] = useState(settings.tweetReminder);
  const [tweetTasklist, setTweetTasklist] = useState(settings.tweetTasklist);

  const toggleSwitch = (input: string) => {
    switch (input) {
      case 'email':
        setNotifyEmail(!notifyEmail);
        break;
      case 'push':
        setNotifyPush(!notifyPush);
        break;
      case 'note':
        setTweetNote(!tweetNote);
        break;
      case 'reminder':
        setTweetReminder(!tweetReminder);
        break;
      case 'tasklist':
        setTweetTasklist(!tweetTasklist);
        break;
    }
  }

  useEffect(() => {
    setSettings({
      tweetNote,
      tweetReminder,
      tweetTasklist,
      notifyEmail,
      notifyPush,
    });

    // TODO: SAVE SETTINGS IN API
  }, [tweetNote,
    tweetReminder,
    tweetTasklist,
    notifyEmail,
    notifyPush])

  return (
    <G.Container>
      <G.MainContainer>
        <G.Main>
          <G.Title>Configurações</G.Title>

          <G.Title1>Notificações</G.Title1>
          <S.Setting>
            <S.SettingTitle>
              Via e-mail
            </S.SettingTitle>
            <S.SettingHandle
              onValueChange={() => toggleSwitch('email')}
              value={notifyEmail}
            />
          </S.Setting>

          <S.Setting>
            <S.SettingTitle>
              Via Push
            </S.SettingTitle>
            <S.SettingHandle
              onValueChange={() => toggleSwitch('push')}
              value={notifyPush}
            />
          </S.Setting>

          <G.Title1>Integração com Twitter</G.Title1>
          <S.Setting>
            <S.SettingTitle>
              Sincronizar notas
            </S.SettingTitle>
            <S.SettingHandle
              onValueChange={() => toggleSwitch('note')}
              value={tweetNote}
            />
          </S.Setting>

          <S.Setting>
            <S.SettingTitle>
              Sincronizar listas de tarefas
            </S.SettingTitle>
            <S.SettingHandle
              onValueChange={() => toggleSwitch('tasklist')}
              value={tweetTasklist}
            />
          </S.Setting>

          <S.Setting>
            <S.SettingTitle>
              Sincronizar lembretes
            </S.SettingTitle>
            <S.SettingHandle
              onValueChange={() => toggleSwitch('reminder')}
              value={tweetReminder}
            />
          </S.Setting>

        </G.Main>
      </G.MainContainer>
    </G.Container>
  )
}