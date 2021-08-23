import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://0.0.0.0:8080'
});

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
    const resp = await api.get('/user/request-token', {
      params: {
        callback_url: callback_url
      }
    })
    return resp.data
  } catch (err) {
    console.log(err);
  }
}

export const getAcessParams = async (oauth_token: string, 
  oauth_token_secret: string, oauth_verifier: string) => {
  try {
    const resp = await api.get('/user/access-token', {
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