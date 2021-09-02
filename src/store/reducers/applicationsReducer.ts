import { ApplicationsAction, ApplicationsActionTypes, IApplicationsState } from '../types/applicationsTypes';

const initialState: IApplicationsState = {
  applications: [],
  currentApplication: {},
  error: null,
};

const applcationsReducer = (state = initialState, action: ApplicationsAction): IApplicationsState => {
  switch (action.type) {
    case ApplicationsActionTypes.FETCH_APPLICATIONS_SUCCESS:
      return { ...state, applications: action.payload };
    case ApplicationsActionTypes.FETCH_APPLICATIONS_FAILURE:
      return { ...state, error: action.payload };
    case ApplicationsActionTypes.FETCH_CURRENT_APPLICATION_SUCCESS:
      return { ...state, currentApplication: action.payload };
    case ApplicationsActionTypes.FETCH_CURRENT_APPLICATION_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default applcationsReducer;
