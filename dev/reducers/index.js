import { combineReducers } from 'redux';

import clock from './clockReducer';
import theme from './themeReducer';

export default combineReducers({
  clock,
  theme
})
