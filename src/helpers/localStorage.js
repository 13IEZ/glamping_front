export const getUserFromLocalStorage = () => {
  const state = localStorage.getItem('state');

  if (!!state) {
    return JSON.parse(state);
  }

  return undefined;
};

export const setUserToLocalStorage = (data) => {
  const state = JSON.stringify(data);
  localStorage.setItem('state', state);
};
