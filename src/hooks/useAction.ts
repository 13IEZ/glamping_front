import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as LocationsActionCreators from '../store/actions/locationsAction';
import * as ProductActionCreators from '../store/actions/productsAction';
import * as StoreActionCreator from '../store/actions/storeAction';
import * as UserActionCreators from '../store/actions/usersAction';

const ActionCreators = {
  ...UserActionCreators,
  ...ProductActionCreators,
  ...LocationsActionCreators,
  ...StoreActionCreator,
};

export const useActions = (): any => {
  const dispatch = useDispatch();
  return bindActionCreators(ActionCreators, dispatch);
};
