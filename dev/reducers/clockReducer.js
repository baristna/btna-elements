import { actionTypes } from '../actions/action-types';

const initialState = 0

export default function clockReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TICK:
      return action.ts
    default:
      return state
  }
}
