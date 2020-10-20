import auth from '@react-native-firebase/auth';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';
import colors from '../../assets/colors';
import Categories from './Categoriesitems';

function CustomDrawer({navigation,userInfo}) {
  const [isLogin, setIslogin] = useState(true);
  const [email, setemail] = useState('');
  const [User, setUser] = useState({});

  useEffect(() => {
   changeStatusUser()
  
  }, []);

  const changeStatusUser=()=>{
    
    auth().onAuthStateChanged( (user)=> {
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
    auth()
      .signOut()
      .then(() => {
        setIslogin('');
        props.navigation.navigate('auth');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (

    <View style={{flex: 1, backgroundColor: colors.header}}>
      <DrawerContentScrollView>
        {isLogin ? (
          <View style={{marginBottom: 40,}}>
            {
              userInfo.photo ?
              <Image source={{uri:userInfo.photo}} style={styles.userImage}/>:
              <View style={styles.userImage}>
              <Text style={styles.initialStringName}>
                {userInfo.email.toUpperCase().substr(0, 1)}
              </Text>
            </View>
            }

            <Text style={{textAlign: 'center', marginTop: 8, marginBottom: 6}}>
              {userInfo.email}
            </Text>
          </View>
        ) : (
          <View style={{height: 8}}></View>
        )}

        <DrawerItem
          icon={({color, size}) => <Icon name="home" color={color} size={20} />}
          label="Inicio"
          onPress={() => {
            navigation.navigate('home');
          }}
        />

        <Categories navigation={navigation} />
      </DrawerContentScrollView>

      {isLogin ? (
        <View>
          <DrawerItem
            style={{top: 5}}
            icon={({color, size}) => (
              <Icon name="user-alt" color={color} size={20} />
            )}
            label="Perfil"
            onPress={() => navigation.navigate('profile')}
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
          onPress={() =>
           navigation.navigate('auth')
          }
        />
      )}
    </View>
  );
}

const mapStateToprops =state=>{

  return {
    userInfo : state.auth.user
  }
}
export default connect(mapStateToprops)(CustomDrawer)


const styles = StyleSheet.create({
  userImage: {
    width: 120,
    height: 120,
    borderRadius: 100,
    marginHorizontal: 48,
    backgroundColor: colors.background,
  },

  initialStringName: {
    marginTop: 10,
    fontSize: 70,
    textAlign: 'center',

    color: 'black',
  },
});


