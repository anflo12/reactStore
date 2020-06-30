/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {createDrawerNavigator} from '@react-navigation/drawer';
// Import navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import Categories from './components/Categories';
import CustomDrawer from './components/CustomDrawer';
import GenericList from './components/GenericList';
//import Screens
import LoginScreen from './screens/auth/LoginScreen';
import RecoveryPassword from './screens/auth/RecoveryPassword';
import RegisterScreen from './screens/auth/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/profile/ProfileScreen';

const Login = createStackNavigator();
const Home = createStackNavigator();
const Profile = createStackNavigator();

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

      <Login.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerTitle: 'Inicio',
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

      <Home.Screen
        name="products"
        component={GenericList}
        options={{headerTitle: 'Celulares', headerTintColor: 'white'}}
      />
    </Home.Navigator>
  );
};

const ProfileStack =()=>{
  return(
    <Profile.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: '#FFA726'},
      headerTitleAlign: 'left',
    }}>
    <Profile.Screen
      name="profile"
      component={HomeScreen}
      options={{headerTitle: 'Inicio', headerTintColor: 'white'}}
    />

    <Profile.Screen
      name="products"
      component={GenericList}
      options={{headerTitle: 'Celulares', headerTintColor: 'white'}}
    />
  </Profile.Navigator>
  )
}
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        overlayColor="transparent"
        drawerStyle={{marginTop: 57, width: 230}}>
        <Drawer.Screen name="login" component={LoginStack} />
        <Drawer.Screen name="categories" component={Categories} />
        <Drawer.Screen name="products" component={GenericList} />
        <Drawer.Screen name="profile" component={ProfileScreen} />
        <Drawer.Screen name="home" component={HomeStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
