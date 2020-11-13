import React from 'react'
// import { View } from 'react-native'
import { Provider } from 'react-redux'
import Main from './src/screens/Main'

import store from './src/redux/store'

export default function App () {
  return (
  // <Provider store={store}>
      <Main />
  // </Provider>
  )
}
