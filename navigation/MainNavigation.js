import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import GenericList from '../components/GenericList';
import ProfileScreen from '../screens/profile/ProfileScreen';
import ProductsScreen from '../screens/products/ProductsScreen';

const Home = createStackNavigator();
const Profile = createStackNavigator();

const Main = createStackNavigator();
const Products = createStackNavigator();

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
        options={{headerTitle: ' ', headerTintColor: 'white'}}
      />
    </Home.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Profile.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#FFA726'},
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
  return(
    <Products.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: '#FFA726'},
      headerTitleAlign: 'left',
    }}>
    <Products.Screen
      name="Products"
      component={ProductsScreen}
      options={{headerTitle: 'Inicio', headerTintColor: 'white'}}
    />
  </Products.Navigator>
  )
};
const MainStack = () => {
  return (
    <Main.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#FFA726'},
        headerTitleAlign: 'left',
      }}>
      <Main.Screen
        name="home"
        component={HomeStack}
        options={{headerTitle: 'Inicio', headerTintColor: 'white'}}
      />

      <Main.Screen
        name="profile"
        component={ProfileStack}
        options={{headerTitle: 'Inicio', headerTintColor: 'white'}}
      />

      <Main.Screen
        name="products"
        component={ProductsStack}
        options={{headerTitle: 'Inicio', headerTintColor: 'white'}}
      />
    </Main.Navigator>
  );
};

export default MainStack;
