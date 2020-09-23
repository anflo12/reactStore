import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Card, Image, Input} from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../assets/colors';
import firestore from '@react-native-firebase/firestore';

export default function RegisterScreen({navigation}) {
  const [icon, setIcon] = useState('eye-slash');
  const [hidePassword, setHidePassword] = useState(true);
  const [Loadng, setLoadng] = useState(false);
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfPassword, setConfPassword] = useState('');
  const [Adress, setAdress] = useState(0);

  const _changeIcon = () => {
    icon == 'eye-slash'
      ? (setIcon('eye'), setHidePassword(false))
      : (setIcon('eye-slash'), setHidePassword(true));
  };

  const addUser = (id) => {
    const user = {
      name:Name,
      email:Email,
      address:Adress
    }
    firestore()
      .collection('users')
      .doc(id)
      .set(user)
      .then(() => {
        console.log('User added!');
      });
  };
  const onpresRegister = () => {
    auth()
      .createUserWithEmailAndPassword(Email.trim(), Password.trim())
      .then(() => {
        addUser(auth().currentUser.uid);
        navigation.navigate('home');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          alert('That email address is invalid!');
        }

        console.error(error);
      });
  };
  return (
    <View style={{backgroundColor: colors.background, flex: 1}}>
      <KeyboardAwareScrollView>
        <Card containerStyle={styles.card}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.styleLogo}
          />
          <Input
            label="Nombre Completo"
            labelStyle={{color: colors.secondary}}
            inputStyle={{color: colors.secondary}}
            onChangeText={(value) => setName(value)}
          />
          <Input
            label="Correo electronico"
            labelStyle={{color: colors.secondary}}
            inputStyle={{color: colors.secondary}}
            placeholder="example@correo.com"
            onChangeText={(value) => setEmail(value)}
          />
          <Input
            label="Contraseña"
            labelStyle={{color: colors.secondary}}
            secureTextEntry={hidePassword}
            rightIcon={
              <Icon name={icon} size={20} onPress={() => _changeIcon()} />
            }
            onChangeText={(value) => setPassword(value)}
          />
          <Input
            label="Confirmar contraseña"
            labelStyle={{color: colors.secondary}}
            secureTextEntry={hidePassword}
            rightIcon={
              <Icon name={icon} size={20} onPress={() => _changeIcon()} />
            }
            onChangeText={(value) => setConfPassword(value)}
          />
          <Input
            label="Direccion"
            labelStyle={{color: colors.secondary}}
            keyboardType={'default'}
            onChangeText={(value) => setAdress(value)}
          />

          <Button
            title="Registrarme"
            buttonStyle={{backgroundColor: colors.primary}}
            loading={Loadng}
            onPress={() => onpresRegister()}
          />

          <View style={styles.viewOptions}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.styleText}>Tengo una cuenta</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('RecoveryPassword')}>
              <Text style={styles.styleText}>¿Olvidaste tu contraseña?</Text>
            </TouchableOpacity>
          </View>
        </Card>
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  styleLogo: {
    width: 200,
    height: 160,
    marginHorizontal: 45,
    alignSelf: 'center',
  },
  card: {
    marginTop: 15,
    margin: 6,
    borderRadius: 12,
    elevation: 5,
  },
  styleText: {
    color: colors.secondary,
    fontSize: 13,
    fontWeight: 'bold',
  },

  viewOptions: {
    flexDirection: 'row',
    marginTop: '10%',
    marginBottom: '5%',
    justifyContent: 'space-around',
  },
});
