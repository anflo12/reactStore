import React from 'react';
import {View, Text,  StyleSheet} from 'react-native';
import {Input, Card, Button,Image} from 'react-native-elements';

export default function RecoveryPassword() {
  return (
    <View style={{backgroundColor: '#dfe4ea', flex: 1}}>
      <Card containerStyle={{marginTop:'35%'}}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.styleLogo}
        />
        <Input
          label="Correo electronico"
          labelStyle={{color: '#B3700D'}}
          inputStyle={{color: '#B3700D'}}
        />

        <Button title="Recuperar contraseña" buttonStyle={{backgroundColor: '#FFBC5A'}} />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  styleLogo: {
    width: 200,
    height: 160,
    alignSelf: 'center',
    marginHorizontal:45
  },
});
