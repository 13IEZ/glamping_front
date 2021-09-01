import axios, { AxiosRequestConfig } from 'axios';

import store from '../store/configureStore';
import { UserState } from '../store/types/users';
import config from './config';

const ax = axios.create({
  baseURL: config.apiUrl,
});

ax.interceptors.request.use((req: AxiosRequestConfig) => {
  const users: UserState = store.getState().users;
  if (users.user) req.headers['Authentication'] = users.user.token;
  return req;
});

export default ax;
