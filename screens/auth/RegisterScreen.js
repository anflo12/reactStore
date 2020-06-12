import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card, Image, Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../../assets/colors';

export default function RegisterScreen({navigationi}) {
  const [icon, setIcon] = useState('eye-slash');
  const [hidePassword, setHidePassword] = useState(true);

  const _changeIcon = () => {
    icon == 'eye-slash'
      ? (setIcon('eye'), setHidePassword(false))
      : (setIcon('eye-slash'), setHidePassword(true));
  };
  return (
    <View style={{backgroundColor: colors.background, flex: 1}}>
      <KeyboardAwareScrollView>
        <Card containerStyle={{marginTop: 15, margin: 6}}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.styleLogo}
          />
          <Input
            label="Nombre de usuario"
            labelStyle={{color: colors.secondary}}
            inputStyle={{color: colors.secondary}}
            placeholder="example@correo.com"
          />
          <Input
            label="Correo electronico"
            labelStyle={{color: colors.secondary}}
            inputStyle={{color: colors.secondary}}
            placeholder="example@correo.com"
          />
          <Input
            label="Contraseña"
            labelStyle={{color: colors.secondary}}
            secureTextEntry={hidePassword}
            rightIcon={
              <Icon name={icon} size={20} onPress={() => _changeIcon()} />
            }
          />
          <Input
            label="Confirmar contraseña"
            labelStyle={{color:colors.secondary}}
            secureTextEntry={hidePassword}
            rightIcon={
              <Icon name={icon} size={20} onPress={() => _changeIcon()} />
            }
          />
          <Input
            label="Telefono"
            labelStyle={{color: colors.secondary}}
            keyboardType={'number-pad'}
            textContentType="telephoneNumber"
          />

          <Button
            title="Registrarme"
            buttonStyle={{backgroundColor: colors.primary}}
          />

          <View
            style={{
              flexDirection: 'row',
              marginTop: '10%',
              marginBottom: '5%',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.styleText}>Tengo una cuenta</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('RecoveryPassword')}>
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
  
  styleText: {
    color: colors.secondary,
    fontSize: 13,
    fontWeight: 'bold',
  },
});
