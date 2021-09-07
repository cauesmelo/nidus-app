import React, { useState } from 'react';
import { getSettings, setSettings as setSettingsAPI, setHeader, setNumber as setNumberAPI } from '../../utils/api';
import * as S from './styles';
import * as G from '../../global/styles/global';
import { useEffect } from 'react';
import { ISettings, ISession } from '../../global/types';
import { Text } from 'react-native';

export const Settings = ({ settings, setSettings, session }:
  { settings: ISettings, setSettings: (newSettings: ISettings) => void, session: ISession }) => {
  setHeader(session.access_token, session.user_id);
  const [insertNumber, setInsertNumber] = useState(false);
  const [number, setNumber] = useState('');

  const loadSettings = async () => {
    setSettings(await getSettings(settings.user_id));
  }

  const toggleSwitch = async (input: string) => {
    if (input === 'push' && !settings.push) {
      setInsertNumber(true);
    } else {
      // @ts-ignore
      setSettings((prevState) => {
        return {
          ...prevState,
          [input]: !prevState[input]
        }
      });
    }
  }

  useEffect(() => {
    setSettingsAPI(settings)
  }, [settings])

  useEffect(() => {
    loadSettings();
  }, []);

  const handleChangeNumber = (text: string) => {
    setNumber(text);
  }

  const handleCancelNumber = () => {
    // @ts-ignore
    setSettings((prevState) => {
      return {
        ...prevState,
        push: false
      }
    });
    setInsertNumber(false);
  }

  const handleSetNumber = async() => {
    if(await setNumberAPI(number)){
      // @ts-ignore
      setSettings((prevState) => {
        return {
          ...prevState,
          push: true
        }
      });
      setInsertNumber(false);
    }
      
  }

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
            {insertNumber ? (
              <S.InsertContainer>
                <S.LineContainer>
                  <S.SettingTitle>Insira seu número:</S.SettingTitle>
                  <S.NumberInput
                    value={number}
                    onChangeText={(text: string) => handleChangeNumber(text)}
                  />
                </S.LineContainer>
                <S.LineContainer>
                  <S.Button onPress={handleCancelNumber}>
                    <Text>Cancelar</Text>
                  </S.Button>
                  <S.Button onPress={handleSetNumber}>
                    <Text>Confirmar</Text>
                  </S.Button>

                </S.LineContainer>
              </S.InsertContainer>
            ) : (
              <>
                <S.SettingTitle>
                  Via SMS
                </S.SettingTitle>
                <S.SettingHandle
                  onValueChange={() => toggleSwitch('push')}
                  value={settings.push}
                />
              </>
            )}

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
      </G.MainContainer >
    </G.Container >
  )
}