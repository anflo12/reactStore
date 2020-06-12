import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View,CheckBox} from 'react-native';
import {Button, Card, Input, Image} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../assets/colors';

export default function LoginScreen({navigation}) {
  const [icon, setIcon] = useState('eye-slash');
  const [hidePassword, setHidePassword] = useState(true);
  const [loading, setLoading] = useState(false);
const [isSelected, setSelected] = useState(false)
  const _changeIcon = () => {
    icon == 'eye-slash'
      ? (setIcon('eye'), setHidePassword(false))
      : (setIcon('eye-slash'), setHidePassword(true));
  };

  const onpressloading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };


  const checking=()=>{
      if (isSelected) {
        setSelected(false)
      }else{
        setSelected(true)
      }
  }

  return (
    <View style={{backgroundColor: colors.background, flex: 1}}>
      <KeyboardAwareScrollView>
        <Card containerStyle={{marginTop: 15, margin: 6}}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.styleLogo}
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
            inputStyle={{marginBottom:0}}
            secureTextEntry={hidePassword}
            rightIcon={
              <Icon name={icon} size={20} onPress={() => _changeIcon()} />
            }
          />
          
          <View style={{flexDirection:'row', marginBottom:10}}>
          <CheckBox
          value={isSelected}
          onValueChange={checking}
          
        />
        <Text style={{marginTop:5}}>Recordarme</Text>
          </View>
    
 
          <Button
            title="Ingresar"
            buttonStyle={{backgroundColor: colors.primary}}
            loading={loading}
            onPress={() => onpressloading()}
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
  styleLogo: {
    width: 200,
    height: 160,
    alignSelf: 'center',
    marginHorizontal: 40,
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
