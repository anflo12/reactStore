/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';

// Import navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';

//import Screens
import LoginScreen from './screens/auth/LoginScreen';
import RecoveryPassword from './screens/auth/RecoveryPassword';
import RegisterScreen from './screens/auth/RegisterScreen';
import CustomDrawer from './components/CustomDrawer';
import HomeScreen from './screens/HomeScreen';

const Login = createStackNavigator();
const Home = createStackNavigator();

const Drawer = createDrawerNavigator();
const LoginStack = () => {
  return (
    <Login.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#FFA726'},
        headerTitleAlign: 'left',
      }}>
      <Login.Screen
        name="login"
        component={LoginScreen}
        options={{headerTitle: ' Iniciar sesion ', headerTintColor: 'white'}}
      />
      <Login.Screen
        name="Register"
        component={RegisterScreen}
        options={{headerTitle: 'Registarse', headerTintColor: 'white'}}
      />

      <Login.Screen
        name="RecoveryPassword"
        component={RecoveryPassword}
        options={{
          headerTitle: 'Recuperar contraseña',
          headerTintColor: 'white',
        }}
      />
    </Login.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Home.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#FFA726'},
        headerTitleAlign: 'left',
      }}>
      <Home.Screen
        name="home"
        component={HomeScreen}
        options={{headerTitle: 'Inicio', headerTintColor: 'white'}}
      />
    </Home.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        overlayColor="transparent"
        drawerStyle={{marginTop: 57, width: 230}}>
        <Drawer.Screen name="login" component={LoginStack} />

        <Drawer.Screen name="home" component={HomeStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
