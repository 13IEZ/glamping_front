import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserActionCreators from '../store/actions/usersAction';
import * as ModuleActionCreators from '../store/actions/modulesAction';
import * as LocationsActionCreators from '../store/actions/locationsAction';

const ActionCreators = {
  ...UserActionCreators,
  ...ModuleActionCreators,
  ...LocationsActionCreators,
};

export const useActions = (): any => {
  const dispatch = useDispatch();
  return bindActionCreators(ActionCreators, dispatch);
};
