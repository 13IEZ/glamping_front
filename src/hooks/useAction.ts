import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as CategoriesActionCreators from '../store/actions/categoriesAction';
import * as LocationsActionCreators from '../store/actions/locationsAction';
import * as PichActionCreators from '../store/actions/pichesAction';
import * as ProductActionCreators from '../store/actions/productsAction';
import * as UserActionCreators from '../store/actions/usersAction';

const ActionCreators = {
  ...UserActionCreators,
  ...ProductActionCreators,
  ...LocationsActionCreators,
  ...CategoriesActionCreators,
  ...PichActionCreators,
};

export const useActions = (): any => {
  const dispatch = useDispatch();
  return bindActionCreators(ActionCreators, dispatch);
};
