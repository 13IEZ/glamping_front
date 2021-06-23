export const getUserFromLocalStorage = (): {} | undefined => {
  const state = localStorage.getItem('state');

  if (state) {
    return JSON.parse(state);
  }

  return undefined;
};

export const setUserToLocalStorage = (data: {}): void => {
  const state = JSON.stringify(data);
  localStorage.setItem('state', state);
};
