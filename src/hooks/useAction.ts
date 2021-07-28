import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserActionCreators from '../store/actions/usersAction';
import * as ProductActionCreators from '../store/actions/productsAction';
import * as LocationsActionCreators from '../store/actions/locationsAction';
import * as CategoriesActionCreators from '../store/actions/categoriesAction';

const ActionCreators = {
  ...UserActionCreators,
  ...ProductActionCreators,
  ...LocationsActionCreators,
  ...CategoriesActionCreators,
};

export const useActions = (): any => {
  const dispatch = useDispatch();
  return bindActionCreators(ActionCreators, dispatch);
};
