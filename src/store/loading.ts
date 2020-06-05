import { Action } from 'redux';
import {
  START_LOADING,
  SET_LOADED,
  SET_ERROR,
  FINISH_LOADING,
} from '../constants/actionTypes';

type StartLoadingAction = Action<typeof START_LOADING>;
type FinishLoadingAction = Action<typeof FINISH_LOADING>;
type SetLoadedAction = Action<typeof SET_LOADED>;
type SetErrorAction = Action<typeof SET_ERROR> & {
  error: string;
};

export const startLoading = (): StartLoadingAction => ({
  type: START_LOADING,
});
export const finishLoading = (): FinishLoadingAction => ({
  type: FINISH_LOADING,
});
export const setLoaded = (): SetLoadedAction => ({
  type: SET_LOADED,
});
export const setError = (error = ''): SetErrorAction => ({
  type: SET_ERROR,
  error,
});

export type LoadingState = {
  loading: boolean;
  loaded: boolean;
  error: string;
};

const initialState: LoadingState = {
  loading: false,
  loaded: false,
  error: '',
};

type LoadingAction = StartLoadingAction | SetLoadedAction | SetErrorAction | FinishLoadingAction;

const reduce = (state = initialState, action: LoadingAction): LoadingState => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, loading: true };
    case SET_LOADED:
      return { ...state, loaded: true };
    case SET_ERROR:
      return { ...state, error: action.error };
    case FINISH_LOADING:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default reduce;
