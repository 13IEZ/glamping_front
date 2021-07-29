import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as LocationsActionCreators from '../store/actions/locationsAction';

import * as CategoriesActionCreators from '../store/actions/categoriesAction';

import * as ProductActionCreators from '../store/actions/productsAction';
import * as StoreActionCreator from '../store/actions/storeAction';
import * as UserActionCreators from '../store/actions/usersAction';
import * as PichActionCreators from '../store/actions/pichesAction';

const ActionCreators = {
  ...UserActionCreators,
  ...ProductActionCreators,
  ...LocationsActionCreators,

  ...CategoriesActionCreators,

  ...StoreActionCreator,

  ...PichActionCreators,
};

export const useActions = (): any => {
  const dispatch = useDispatch();
  return bindActionCreators(ActionCreators, dispatch);
};
