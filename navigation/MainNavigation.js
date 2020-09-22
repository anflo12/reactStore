import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import colors from '../assets/colors';
import LoginScreen from '../screens/auth/LoginScreen';
import RecoveryPassword from '../screens/auth/RecoveryPassword';
import RegisterScreen from '../screens/auth/RegisterScreen';
import HomeScreen from '../screens/home/HomeScreen';
import ProductsScreen from '../screens/products/ProductsScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';

const Home = createStackNavigator();
const Profile = createStackNavigator();

const Main = createStackNavigator();
const Products = createStackNavigator();
const Auth = createStackNavigator();

const AuthStack =()=>{
  return(
    <Auth.Navigator
      screenOptions={{
        headerStyle: {backgroundColor:colors.header},
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
  )
}
const HomeStack = () => {
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

     
    </Home.Navigator>
  );
};

const ProfileStack = () => {
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

const ProductsStack = () => {
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
    </Products.Navigator>
  );
};
const MainStack = () => {
  return (
    <Main.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: colors.header},
        headerTitleAlign: 'left',
      }}
      initialRouteName='home'
      >
        
        <Main.Screen
        name="auth"
        component={AuthStack}
        options={{headerTitle: 'Products', headerTintColor: 'white'}}
      />
      <Main.Screen
        name="home"
        component={HomeStack}
        options={{headerTitle: 'Inicio', headerTintColor: 'white'}}
      />

      <Main.Screen
        name="profile"
        component={ProfileStack}
        options={{headerTitle: 'Perfil', headerTintColor: 'white'}}
      />

      <Main.Screen
        name="products"
        component={ProductsStack}
        options={{headerTitle: 'Productos', headerTintColor: 'white'}}
      />
    </Main.Navigator>
  );
};

export default MainStack;
