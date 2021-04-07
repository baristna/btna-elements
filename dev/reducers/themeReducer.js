import { actionTypes } from '../actions/action-types';

const initialState = 'dark'

export default function themeReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.THEME_CHANGE:
      return action.payload
    default:
      return state
  }
}
