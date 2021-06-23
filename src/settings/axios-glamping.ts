import axios from 'axios';
import config from './config';
import store from '../store/configureStore';

const ax = axios.create({
  baseURL: config.apiUrl,
});

ax.interceptors.request.use(req => {
  const users: any = store.getState().users;
  if (users.user) req.headers['Authentication'] = users.user.token;
  return req;
});

export default ax;
