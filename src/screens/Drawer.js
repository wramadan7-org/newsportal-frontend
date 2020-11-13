import React from 'react'
import { Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'

// import header
import Header from '../component/Header'

// import screen
import Home from './Home'
import Profile from './Profile'
import CreateNews from './CreateNews'
import MyNews from './MyNews'

import { TouchableOpacity } from 'react-native-gesture-handler'

const Draw = createDrawerNavigator()

const Drawer = ({ navigation }) => {
  return (
      <Draw.Navigator
         drawerContentOptions={{ // list bagian drawer
           activeTintColor: 'grey',
           itemStyle: { marginVertical: 5 }
         }}
         // drawerContent={() => <Text>HOLAAA</Text>}
      >
         {/* <Draw.Screen
            name='Profile'
            component={Profile}
            options={{
              header: () => <View>
                  <Text>HALLO</Text>
               </View>
            }}
         /> */}
         <Draw.Screen
            name='Home'
            component={Home}
            options={{
              drawerLabel: 'Home',
              headerRight: () => (<Header />)
            }}
         />
         <Draw.Screen
            name='Profile'
            component={Profile}
            options={{
              drawerLabel: 'Profile',
              //   headerShown: false,
              headerRight: () => (
                 <TouchableOpacity style={{ marginRight: 10 }} onPress={() => navigation.navigate('EditProfile')}>
                    <Text style={{ fontSize: 20 }}>Edit</Text>
                 </TouchableOpacity>
              )
            }}
         />
         <Draw.Screen
            name='MyNews'
            component={MyNews}
            options={{
              drawerLabel: 'My News'
            }}
         />
         <Draw.Screen
            name='Create'
            component={CreateNews}
            options={{
              drawerLabel: 'Create News'
            }}
         />
      </Draw.Navigator>
  )
}

export default Drawer
