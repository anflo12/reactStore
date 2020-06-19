import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../assets/colors';
import Categories from './Categories';

export default function CustomDrawer(props) {
  const [Token, setToken] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: colors.header}}>
      <DrawerContentScrollView>
        <View style={{marginBottom: 40, backgroundColor: colors.background}}>
          <Image
            source={{
              uri:
                'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
            }}
            style={{
              width: 120,
              height: 120,
              borderRadius: 100,
              marginHorizontal: 45,
              marginTop: 10,
            }}
          />
          <Text style={{textAlign: 'center', marginTop: 8}}>User</Text>
          <Text style={{textAlign: 'center', marginTop: 8}}>User</Text>
        </View>

        <DrawerItem
          icon={({color, size}) => <Icon name="home" color={color} size={20} />}
          label="Inicio"
          onPress={() => {
            props.navigation.navigate('home');
          }}
        />

        <Categories/>
      </DrawerContentScrollView>
      {Token ? (
        <DrawerItem
          style={{top: 5}}
          icon={({color, size}) => (
            <Icon name="sign-out-alt" color={color} size={20} />
          )}
          label="Cerrar sesion"
          onPress={() => {
            props.navigation.navigate('login');
          }}
        />
      ) : (
        <DrawerItem
          style={{top: 5}}
          icon={({color, size}) => (
            <Icon name="user-alt" color={color} size={20} />
          )}
          label="Iniciar sesion"
          onPress={() => {
            props.navigation.navigate('login');
          }}
        />
      )}
    </View>
  );
}
