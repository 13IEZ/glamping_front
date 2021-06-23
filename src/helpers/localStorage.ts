import { IUser } from '../store/types/users';

export const getUserFromLocalStorage = (): IUser | undefined => {
  const state = localStorage.getItem('state');

  if (state) {
    return JSON.parse(state);
  }

  return undefined;
};

export const setUserToLocalStorage = (data: IUser): void => {
  const state = JSON.stringify(data);
  localStorage.setItem('state', state);
};
