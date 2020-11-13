import { combineReducers } from 'redux'

import auth from './auth'
import register from './register'
import home from './home'
import personal from './personal'

export default combineReducers({
  auth,
  register,
  home,
  personal
})
