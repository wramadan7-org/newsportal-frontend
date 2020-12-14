import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {useSelector} from 'react-redux';

// import header
// import HeaderHome from '../component/Header'

// import screens
import Landpage from './Landpage';
import Login from './Login';
import Register from './Register';
import Category from './Category';
import EditProfile from './EditProfile';
import Detail from './DetailNews';
import EditNews from './EditNews';

import Drawer from './Drawer';

const Stack = createStackNavigator();

const Main = () => {
  const authState = useSelector((state) => state.auth);
  return (
    <NavigationContainer>
      {!authState.success ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Landpage"
            component={Landpage}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: '',
            }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              title: '',
            }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Drawer}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Detail" component={Detail} />
          <Stack.Screen
            name="Category"
            component={Category}
            // options={{
            //   headerShown: false
            // }}
          />
          <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={{
              title: 'Edit Profile',
            }}
          />
          <Stack.Screen
            name="EditNews"
            component={EditNews}
            options={{
              title: 'Edit News',
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Main;
