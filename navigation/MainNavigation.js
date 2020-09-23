import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import colors from '../assets/colors';
import LoginScreen from '../screens/auth/LoginScreen';
import RecoveryPassword from '../screens/auth/RecoveryPassword';
import RegisterScreen from '../screens/auth/RegisterScreen';
import HomeScreen from '../screens/home/HomeScreen';
import DetailProducts from '../screens/products/DetailProducts';
import ProductsScreen from '../screens/products/ProductsScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';

const Home = createStackNavigator();
const Profile = createStackNavigator();

const Main = createStackNavigator();
const Products = createStackNavigator();
const Auth = createStackNavigator();

export const AuthStack = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: colors.header},
        headerTitleAlign: 'left',
      }}
      initialRouteName="login">
      <Auth.Screen
        name="login"
        component={LoginScreen}
        options={{headerTitle: ' Iniciar sesion ', headerTintColor: 'white'}}
      />
      <Auth.Screen
        name="Register"
        component={RegisterScreen}
        options={{headerTitle: 'Registarse', headerTintColor: 'white'}}
      />

      <Auth.Screen
        name="RecoveryPassword"
        component={RecoveryPassword}
        options={{
          headerTitle: 'Recuperar contraseña',
          headerTintColor: 'white',
        }}
      />
    </Auth.Navigator>
  );
};
export const HomeStack = () => {
  return (
    <Home.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: colors.header},
        headerTitleAlign: 'left',
      }}>
      <Home.Screen
        name="home"
        component={HomeScreen}
        options={{headerTitle: 'Inicio', headerTintColor: 'white'}}
      />

      <Home.Screen
        name="detailProduct"
        component={DetailProducts}
        options={{headerTitle: 'Inicio', headerTintColor: 'white'}}
      /> 
    </Home.Navigator>
  );
};

export const ProfileStack = () => {
  return (
    <Profile.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: colors.header},
        headerTitleAlign: 'left',
      }}>
      <Profile.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{headerTitle: 'Inicio', headerTintColor: 'white'}}
      />
    </Profile.Navigator>
  );
};

export const ProductsStack = () => {
  return (
    <Products.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: colors.header},
        headerTitleAlign: 'left',
      }}>
      <Products.Screen
        name="Products"
        component={ProductsScreen}
        options={{headerTitle: 'products', headerTintColor: 'white'}}
      />

      <Products.Screen
        name="DetailProduct"
        component={DetailProducts}
        options={{headerTitle: 'detail', headerTintColor: 'white'}}
      />
    </Products.Navigator>
  );
};
