import {combineReducers} from 'redux';

import auth from './auth';
import register from './register';
import news from './news';
import personal from './personal';
import search from './search';

export default combineReducers({
  auth,
  register,
  news,
  personal,
  search,
});
