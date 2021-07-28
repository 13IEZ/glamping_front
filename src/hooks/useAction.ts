import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserActionCreators from '../store/actions/usersAction';
import * as ProductActionCreators from '../store/actions/productsAction';
import * as LocationsActionCreators from '../store/actions/locationsAction';

const ActionCreators = {
  ...UserActionCreators,
  ...ProductActionCreators,
  ...LocationsActionCreators,
};

export const useActions = (): any => {
  const dispatch = useDispatch();
  return bindActionCreators(ActionCreators, dispatch);
};
