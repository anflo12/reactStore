import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
// Import navigation
import {NavigationContainer} from '@react-navigation/native';
import CustomDrawer from '../components/drawer/CustomDrawer';

import MainStack from './MainNavigation';

const Drawer = createDrawerNavigator();

export default function Boot() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        overlayColor="transparent"
        drawerStyle={{marginTop: 57, width: 230}}>
        <Drawer.Screen name="main" component={MainStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
