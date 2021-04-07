import { actionTypes } from './action-types';

export const setClock = () => dispatch => {
  return dispatch({ type: actionTypes.TICK, ts: Date.now() })
}

export const startClock = () => dispatch => {
  return setInterval(() => {
    dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() })
  }, 1000)
}
