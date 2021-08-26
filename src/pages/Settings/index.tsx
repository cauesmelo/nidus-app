import React, { useState } from 'react';
import { getSettings, setSettings as setSettingsAPI, setHeader } from '../../utils/api';
import * as S from './styles';
import * as G from '../../global/styles/global';
import { useEffect } from 'react';
import { ISettings, ISession } from '../../global/types';

export const Settings = ({ settings, setSettings, session }:
  { settings: ISettings, setSettings: (newSettings: ISettings) => void, session: ISession }) => {
    setHeader(session.access_token, session.user_id);

  const loadSettings = async () => {
    setSettings(await getSettings(settings.user_id));
  }

  const toggleSwitch = async (input: string) => {
    // @ts-ignore
    setSettings((prevState) => {
      return {
        ...prevState,
        [input]: !prevState[input]
      }
    });
  }

  useEffect(() => {
    setSettingsAPI(settings)
  }, [settings])

  useEffect(() => {
    loadSettings();
  }, [])

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
              value={settings.email}
            />
          </S.Setting>

          <S.Setting>
            <S.SettingTitle>
              Via SMS
            </S.SettingTitle>
            <S.SettingHandle
              onValueChange={() => toggleSwitch('push')}
              value={settings.push}
            />
          </S.Setting>

          <G.Title1>Integração com Twitter</G.Title1>
          <S.Setting>
            <S.SettingTitle>
              Sincronizar notas
            </S.SettingTitle>
            <S.SettingHandle
              onValueChange={() => toggleSwitch('note')}
              value={settings.note}
            />
          </S.Setting>

          <S.Setting>
            <S.SettingTitle>
              Sincronizar listas de tarefas
            </S.SettingTitle>
            <S.SettingHandle
              onValueChange={() => toggleSwitch('task')}
              value={settings.task}
            />
          </S.Setting>

          <S.Setting>
            <S.SettingTitle>
              Sincronizar lembretes
            </S.SettingTitle>
            <S.SettingHandle
              onValueChange={() => toggleSwitch('reminder')}
              value={settings.reminder}
            />
          </S.Setting>

        </G.Main>
      </G.MainContainer>
    </G.Container>
  )
}