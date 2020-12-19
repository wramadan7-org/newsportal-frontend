import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

// import header
import Header from '../component/Header';

// import screen
import Home from './Home';
import Profile from './Profile';
import CreateNews from './CreateNews';
import MyNews from './MyNews';
import EditNews from './EditNews';
import CustomDrawer from '../component/CustomDrawer';

const Draw = createDrawerNavigator();

const Drawer = ({navigation}) => {
  return (
    <Draw.Navigator
      drawerContentOptions={{
        // list bagian drawer
        activeTintColor: 'grey',
        itemStyle: {marginVertical: 5},
      }}
      // drawerContent={() => <CustomDrawer home={Home} profile={Profile} />}
    >
      <Draw.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerLabel: () => <CustomDrawer />,
          // headerStyle: {backgroundColor: 'grey'},
          //   headerShown: false,
          headerRight: () => (
            <TouchableOpacity
              style={{marginRight: 10}}
              onPress={() => navigation.navigate('EditProfile')}>
              <Text style={{fontSize: 20}}>Edit</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Draw.Screen
        name="Home"
        component={Home}
        options={{
          drawerLabel: 'Home',
          // title: () => ()
          headerTitle: () => <Header />,
          // headerRight: () => <Header />,
        }}
      />
      <Draw.Screen
        name="MyNews"
        component={MyNews}
        options={{
          drawerLabel: 'My News',
        }}
      />
      <Draw.Screen
        name="Create"
        component={CreateNews}
        options={{
          drawerLabel: 'Create News',
        }}
      />
    </Draw.Navigator>
  );
};

export default Drawer;
