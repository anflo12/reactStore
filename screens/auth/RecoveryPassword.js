import React, {useState} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {Button, Card, Image, Input} from 'react-native-elements';
import  auth  from '@react-native-firebase/auth';


export default function RecoveryPassword() {
  const [Email, setEmail] = useState('');
  const RecoveryPassword = () => {
    auth()
      .sendPasswordResetEmail(emailAddress)
      .then(function () {
        Alert.alert(
          'Mensaje informativo',
          'Se ha enviado un correo para restablecer su contraseña por favor revisarlo',
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
          {cancelable: false},
        );
      })
      .catch(function (error) {
        // An error happened.
      });
  };
  return (
    <View style={{backgroundColor: '#dfe4ea', flex: 1}}>
      <Card containerStyle={styles.card}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.styleLogo}
        />
        <Input
          label="Correo electronico"
          labelStyle={{color: '#B3700D'}}
          inputStyle={{color: '#B3700D'}}
          onChangeText={(value) => setEmail(value)}
        />

        <Button
          title="Recuperar contraseña"
          buttonStyle={{backgroundColor: '#FFBC5A'}}
          onPress={() => RecoveryPassword()}
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 15,
    margin: 6,
    borderRadius: 12,
    elevation: 5,
  },
  styleLogo: {
    width: 200,
    height: 160,
    alignSelf: 'center',
    marginHorizontal: 45,
  },
});
