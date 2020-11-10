import * as React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

// import header
import HeaderHome from '../component/Header'

// import screens
import Home from './Home'
import Category from './Category'

const Draw = createDrawerNavigator()

function Main () {
  return (
      <NavigationContainer>
         <Draw.Navigator>
             <Draw.Screen
             name='Home'
             component={Home}
             options={{
               title: 'Home',
               headerRight: () => <HeaderHome />
             }}
         />
             <Draw.Screen
             name='Category'
             component={Category}
         />
          </Draw.Navigator>
      </NavigationContainer>
  )
}

export default Main
