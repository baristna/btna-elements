import { actionTypes } from './action-types';

export const changeTheme = (theme) => dispatch => {
  return dispatch({ type: actionTypes.THEME_CHANGE, payload: theme })
}
