import {
  TypedUseSelectorHook,
  useSelector
} from 'react-redux';

import { rootState } from '../store/configureStore';

export const useTypedSelectorHook: TypedUseSelectorHook<rootState> = useSelector;
