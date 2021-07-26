export interface IModule {
  _id: string;
  title: string;
  type: string;
  image: Array<string>;
  roominess: number;
  year: number;
  description: string;
  number: number;
  series: string;
  color: string;
  price: number;
  rent: number;
  status: boolean;
  published: boolean;
  factory: string;
}

export interface IModulesState {
  modules: Array<IModule> | [];
  lastFourModules: Array<IModule> | [];
  error: null | string;
}

export interface ILocation {
  _id: string;
  title: string;
  image: Array<string>;
  description: string;
  square: number;
  rent: number;
  status: boolean;
  electricity: boolean;
  water: boolean;
  road: boolean;
  published: boolean;
  owner: string;
}

export interface ILocationsState {
  lastFourLocations: Array<ILocation> | [];
  error: null | string;
}

export interface IUser {
  username: string;
  token: string;
  role: string;
  phone: string;
  email: string;
  description: string;
}

export interface UserState {
  user: null | IUser;
  signUpError: null | string;
  signInError: null | string;
  logoutError: null | string;
}
