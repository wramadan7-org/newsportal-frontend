import React from 'react'
import { Text, TouchableOpcaity, StyleSheet } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'

// import header
import Header from '../component/Header'

// import screen
import Home from './Home'
import Profile from './Profile'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Draw = createDrawerNavigator()

const Drawer = ({ navigation }) => {
  return (
      <Draw.Navigator>
         <Draw.Screen
            name='Home'
            component={Home}
            options={{
              headerRight: () => <Header />
            }}
         />
         <Draw.Screen
            name='Profile'
            component={Profile}
            options={{
            //   headerShown: false,
              headerRight: () => (
                 <TouchableOpacity style={{ marginRight: 10 }} onPress={() => navigation.navigate('EditProfile')}>
                    <Text style={{ fontSize: 20 }}>Edit</Text>
                 </TouchableOpacity>
              )
            }}
         />
      </Draw.Navigator>
  )
}

export default Drawer
