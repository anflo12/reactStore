import {createDrawerNavigator} from '@react-navigation/drawer';
// Import navigation
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import CustomDrawer from './components/CustomDrawer';
import Auth from './navigation/AuthNavigation';
import MainStack from './navigation/MainNavigation';
import {auth} from './config/firebaseConfig';

const Drawer = createDrawerNavigator();
const App = () => {
  const [isLogin, setIslogin] = useState(false);

  useEffect(() => {
    changeStatusUser();
  }, [isLogin]);

  const changeStatusUser = () => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        setIslogin(true);
      } else {
        setIslogin(false);
      }
    });
  };
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        overlayColor="transparent"
        drawerStyle={{marginTop: 57, width: 230}}>
        {isLogin ? (
          <Drawer.Screen name="main" component={MainStack} />
        ) : (
          <Drawer.Screen name="auth" component={Auth} />
        )}

        <Drawer.Screen name="login" component={Auth} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
