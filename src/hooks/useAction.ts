import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserActionCreators from '../store/actions/usersAction';
import * as ModuleActionCreators from '../store/actions/modulesAction';

const ActionCreators = {
  ...UserActionCreators,
  ...ModuleActionCreators,
};

export const useActions = (): any => {
  const dispatch = useDispatch();
  return bindActionCreators(ActionCreators, dispatch);
};
