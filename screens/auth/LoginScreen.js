import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Button, Card, Image, Input} from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../assets/colors';
import {getInfouser} from '../../redux/actions/auth.action';
import {connect} from 'react-redux';

export default function LoginScreen({navigation,onGetInformation}) {
  const [icon, setIcon] = useState('eye');
  const [hidePassword, setHidePassword] = useState(true);
  const [loading, setLoading] = useState(false);
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const _changeIcon = () => {
    icon == 'eye'
      ? (setIcon('eye-slash'), setHidePassword(false))
      : (setIcon('eye'), setHidePassword(true));
  };

  const onPressLogin = async () => {
    auth()
      .signInWithEmailAndPassword(Email.trim(), Password.trim())
      .then(() => {
        alert('bienvenidos');
        navigation.navigate('home');
      })
      .catch((error) => {
        console.log(error);
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
            label="Correo electronico"
            labelStyle={{color: colors.secondary}}
            inputStyle={{color: colors.secondary}}
            placeholder="example@correo.com"
            onChangeText={(value) => setEmail(value)}
          />
          <Input
            label="Contraseña"
            labelStyle={{color: colors.secondary}}
            inputStyle={{marginBottom: 0}}
            secureTextEntry={hidePassword}
            rightIcon={
              <Icon name={icon} size={20} onPress={() => _changeIcon()} />
            }
            onChangeText={(value) => setPassword(value)}
          />

          <Button
            title="Ingresar"
            buttonStyle={{backgroundColor: colors.primary}}
            loading={loading}
            onPress={() => onPressLogin()}
          />

          <Text style={styles.divider}>____________ O ____________</Text>

          <View style={{flexDirection: 'row', marginLeft: 20}}>
            <Button
              icon={<Icon name="facebook" size={30} color="white" />}
              title="Facebook"
              titleStyle={{marginLeft: 10}}
              buttonStyle={styles.buttonFacebook}
            />

            <Button
              icon={<Icon name="google" size={30} color="white" />}
              title="Google"
              titleStyle={{marginLeft: 10}}
              buttonStyle={styles.buttonGoogle}
            />
          </View>

          <View style={styles.viewText}>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.styleText}>Registrarse</Text>
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
  card: {
    marginTop: 15,
    margin: 6,
    borderRadius: 12,
    elevation: 5,
    marginBottom: 8,
  },
  styleLogo: {
    width: 200,
    height: 160,
    alignSelf: 'center',
    marginHorizontal: 40,
    alignItems:'center',
    justifyContent:'center'
  },
  divider: {
    textAlign: 'center',
    marginTop: 20,
    color: 'gray',
    marginBottom: 18,
  },
  buttonFacebook: {
    width: 125,
    height: 45,
    backgroundColor: '#4267b2',
  },

  buttonGoogle: {
    width: 125,
    height: 45,
    marginLeft: 25,
    backgroundColor: '#4285F4',
  },
  styleText: {
    color: '#B3700D',
    fontSize: 13,
    fontWeight: 'bold',
  },
  viewText: {
    flexDirection: 'row',
    marginTop: '10%',
    marginBottom: '5%',
    justifyContent: 'space-around',
  },
});


