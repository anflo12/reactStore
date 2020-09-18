import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import GenericList from '../components/itemsProducts/GenericList';
import ProfileScreen from '../screens/profile/ProfileScreen';
import ProductsScreen from '../screens/products/ProductsScreen';
import colors from '../assets/colors';

const Home = createStackNavigator();
const Profile = createStackNavigator();

const Main = createStackNavigator();
const Products = createStackNavigator();

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

      <Home.Screen
        name="products"
        component={ProductsScreen}
        options={{headerTitle: 'Productos', headerTintColor: 'white'}}
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
  return(
    <Products.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: colors.header},
      headerTitleAlign: 'left',
    }}>
    <Products.Screen
      name="Products"
      component={ProductsScreen}
      options={{ headerTitle:'products',headerTintColor: 'white'}}
    />
  </Products.Navigator>
  )
};
const MainStack = () => {
  return (
    <Main.Navigator
      screenOptions={{
        headerStyle: {backgroundColor:colors.header},
        headerTitleAlign: 'left',
      }}>
      <Main.Screen
        name="home"
        component={HomeStack}
        options={{headerTitle: 'Products', headerTintColor: 'white'}}
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
