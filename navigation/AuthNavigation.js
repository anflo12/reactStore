import React from 'react';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import RecoveryPassword from '../screens/auth/RecoveryPassword';
import HomeScreen from '../screens/HomeScreen';

import {createStackNavigator} from '@react-navigation/stack';

const auth = createStackNavigator();

function Auth() {
  return (
    <auth.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#FFA726'},
        headerTitleAlign: 'left',
      }}
      initialRouteName="login">
      <auth.Screen
        name="login"
        component={LoginScreen}
        options={{headerTitle: ' Iniciar sesion ', headerTintColor: 'white'}}
      />
      <auth.Screen
        name="Register"
        component={RegisterScreen}
        options={{headerTitle: 'Registarse', headerTintColor: 'white'}}
      />

      <auth.Screen
        name="RecoveryPassword"
        component={RecoveryPassword}
        options={{
          headerTitle: 'Recuperar contraseña',
          headerTintColor: 'white',
        }}
      />

      <auth.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerTitle: 'Inicio',
          headerTintColor: 'white',
        }}
      />
    </auth.Navigator>
  );
}

export default Auth;
