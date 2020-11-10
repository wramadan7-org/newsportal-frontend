import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// import header
import HeaderHome from '../component/Header'

// import screens
import Landpage from './Landpage'
import Login from './Login'
import Register from './Register'
import Category from './Category'
import EditProfile from './EditProfile'

import Drawer from './Drawer'

const Stack = createStackNavigator()

function Main () {
  return (
      <NavigationContainer>
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
      </NavigationContainer>
  )
}

export default Main
