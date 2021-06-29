import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserAction from '../store/actions/usersAction';

export const useActions = (): any => {
  const dispatch = useDispatch();
  return bindActionCreators(UserAction, dispatch);
};
