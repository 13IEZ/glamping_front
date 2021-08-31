export interface IFactory {
  _id: string;
  title: string;
}

export interface IFactoriesState {
  factories: Array<IFactory> | [];
  error: null | string;
}

export enum FactoryActionTypes {
  FETCH_FACTORY_SUCCESS = 'FETCH_FACTORY_SUCCESS',
  FETCH_FACTORY_FAILURE = 'FETCH_FACTORY_FAILURE',
}

interface IFetchFactoriesSuccessAction {
  type: FactoryActionTypes.FETCH_FACTORY_SUCCESS;
  payload: Array<IFactory>;
}

interface IFetchFactoriesFailureAction {
  type: FactoryActionTypes.FETCH_FACTORY_FAILURE;
  payload: string;
}

export type FactoriesAction = IFetchFactoriesSuccessAction | IFetchFactoriesFailureAction;
