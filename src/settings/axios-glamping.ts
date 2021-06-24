// @ts-ignore
import axios from 'axios';
import config from './config';
import store from '../store/configureStore';
import { UserState } from '../store/types/users';


const ax = axios.create({
  baseURL: config.apiUrl,
});

ax.interceptors.request.use((req: any) => {
  const users: UserState = store.getState().users;
  if (users.user) req.headers['Authentication'] = users.user.token;
  return req;
});

export default ax;
