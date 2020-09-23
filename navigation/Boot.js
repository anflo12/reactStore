import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
// Import navigation
import {NavigationContainer} from '@react-navigation/native';
import CustomDrawer from '../components/drawer/CustomDrawer';

import {
  AuthStack,
  HomeStack,
  ProductsStack,
  ProfileStack,
} from './MainNavigation';

const Drawer = createDrawerNavigator();

export default function Boot() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
      initialRouteName='home'
        drawerContent={(props) => <CustomDrawer {...props} />}
        overlayColor="transparent"
        drawerStyle={{marginTop: 57, width: 230}}>
        <Drawer.Screen name="auth" component={AuthStack} />
        <Drawer.Screen name="home" component={HomeStack} />
        <Drawer.Screen name="profile" component={ProfileStack} />
        <Drawer.Screen name="products" component={ProductsStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
