import { ISettings, IUserData } from './../global/types';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://0.0.0.0:8080',
});

let token: string;

// TODO: Type this function
// @ts-ignore
export const toQueryString = (params) => {
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

export const getRequestTokens = async (callback_url: string) => {
  try {
    const resp = await api.get('/login/request-token', {
      params: {
        callback_url: callback_url
      }
    })
    return resp.data
  } catch (err) {
    console.log(err);
  }
}

export const getAccessTokens = async (oauth_token: string,
  oauth_token_secret: string, oauth_verifier: string) => {
  try {
    const resp = await api.get('/login/access-token', {
      params: {
        oauth_token: oauth_token,
        oauth_token_secret: oauth_token_secret,
        oauth_verifier: oauth_verifier,
      }
    })
    return resp.data
  } catch (err) {
    console.log(err);
  }
}

export const setToken = (access_token: string) => {
  api.defaults.headers.authorization = `Bearer ${access_token}`;
}

export const getUser = async (user_id: string): Promise<IUserData | undefined> => {
  try {
    const resp = await api.get('/user/', {
      params:
      {
        user_id: user_id
      }
    })
    return resp.data
  } catch (err) {
    console.log(err);
  }
}

export const setSettings = async (settings: ISettings) => {
  try {
    const resp = await api.put('/settings/', { ...settings  })
    return resp.data;
  } catch (err) {
    console.log(err);
  }
}

export const getSettings = async (user_id: string) => {
  try {
    const resp = await api.get('/settings/', {
      params:
      {
        user_id: user_id,
      }
    })
    return resp.data;
  } catch (err) {
    console.log(err);
  }
}

export default api;