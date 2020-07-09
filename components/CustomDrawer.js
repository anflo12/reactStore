import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../assets/colors';
import { auth } from '../config/firebaseConfig';
import Categories from './home/Categories';

export default function CustomDrawer(props) {
  const [isLogin, setIslogin] = useState(true);
  const [email, setemail] = useState('');
  const [User, setUser] = useState({});

  useEffect(() => {
   changeStatusUser()
  
  }, []);

  const changeStatusUser=()=>{
    
    auth.onAuthStateChanged( (user)=> {
      if (user) {
        setUser(user);
        setIslogin(true);
        setemail(user.email);
      } else {
        setUser({});
        setIslogin(false);
      }
    });
  }
  
  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        setIslogin('');
        props.navigation.navigate('login');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={{flex: 1, backgroundColor: colors.header}}>
      <DrawerContentScrollView>
        {isLogin ? (
          <View style={{marginBottom: 40, backgroundColor: colors.background}}>
            <View style={styles.userImage}>
              <Text style={styles.initialStringName}>
                {email.toUpperCase().substr(0, 1)}
              </Text>
            </View>

            <Text style={{textAlign: 'center', marginTop: 8, marginBottom: 6}}>
              {User.email}
            </Text>
          </View>
        ) : (
          <View style={{height: 8}}></View>
        )}

        <DrawerItem
          icon={({color, size}) => <Icon name="home" color={color} size={20} />}
          label="Inicio"
          onPress={() => {
            props.navigation.navigate('home');
          }}
        />

        <Categories navigation={props.navigation} />
      </DrawerContentScrollView>

      {isLogin ? (
        <View>
          <DrawerItem
            style={{top: 5}}
            icon={({color, size}) => (
              <Icon name="user-alt" color={color} size={20} />
            )}
            label="Perfil"
            onPress={() => signOut()}
          />
          <DrawerItem
            style={{top: 5}}
            icon={({color, size}) => (
              <Icon name="sign-out-alt" color={color} size={20} />
            )}
            label="Cerrar sesion"
            onPress={() => signOut()}
          />
        </View>
      ) : (
        <DrawerItem
          style={{top: 5}}
          icon={({color, size}) => (
            <Icon name="sign-in-alt" color={color} size={20} />
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

const styles = StyleSheet.create({
  userImage: {
    width: 120,
    height: 120,
    borderRadius: 100,
    marginHorizontal: 48,
    backgroundColor: 'blue',
  },

  initialStringName: {
    marginTop: 10,
    fontSize: 70,
    textAlign: 'center',

    color: 'white',
  },
});
