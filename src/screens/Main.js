/* eslint-disable multiline-ternary */
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { connect } from 'react-redux'

// import header
// import HeaderHome from '../component/Header'

// import screens
import Landpage from './Landpage'
import Login from './Login'
import Register from './Register'
import Category from './Category'
import EditProfile from './EditProfile'
import Detail from './DetailNews'

import Drawer from './Drawer'

const Stack = createStackNavigator()

class Main extends React.Component {
  // componentDidMount () {
  // console.log('main', this.props.auth)
  // }

  // componentDidUpdate () {
  //   console.log('update', this.props.auth)
  // }

  render () {
    return (
      <NavigationContainer>
        {/* {!this.props.auth.token.length > 0 ? ( */}
          <Stack.Navigator>
            <Stack.Screen
              name='Landpage'
              component={Landpage}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name='Login'
              component={Login}
              options={{
                title: ''
              }}
            />
            <Stack.Screen
              name='Register'
              component={Register}
              options={{
                title: ''
              }}
            />
          {/* </Stack.Navigator> */}
        {/* ) : ( */}
          {/* <Stack.Navigator> */}
            <Stack.Screen
              name='Home'
              component={Drawer}
              options={{
                headerShown: false
              //   title: 'Home',
              //   headerRight: () => <HeaderHome />
              }}
            />
            <Stack.Screen
              name='Detail'
              component={Detail}
            />
            <Stack.Screen
              name='Category'
              component={Category}
              // options={{
              //   headerShown: false
              // }}
            />
            <Stack.Screen
              name='EditProfile'
              component={EditProfile}
              options={{
                title: 'Edit Profile'
              }}
            />
          </Stack.Navigator>
        {/* )} */}

      </NavigationContainer>
    )
  }
}

// const mapStateToProps = state => ({
//   auth: state.auth
// })

export default Main
