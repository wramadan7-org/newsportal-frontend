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
import MyNews from './MyNews';
import ChangePassword from './ChangePassword';

import Drawer from './Drawer';
// splashScreen
import SplashScreen from 'react-native-splash-screen';

const Stack = createStackNavigator();

const Main = () => {
  const authState = useSelector((state) => state.auth);

  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

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
          <Stack.Screen
            name="MyNews"
            component={MyNews}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ChangePassword"
            component={ChangePassword}
            options={{
              title: 'Change Password',
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Main;
