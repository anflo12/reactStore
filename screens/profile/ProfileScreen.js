import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, Card, Image, Input} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../assets/colors';

export default function ProfileScreen() {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [edit, setedit] = useState(false);

  const Editing = () => {
    if (!edit) {
      setedit(true);
    } else {
      setedit(false);
    }
  };
  return (
    <View style={{backgroundColor: colors.background, flex: 1}}>
      <KeyboardAwareScrollView>
        <Card containerStyle={styles.card}>
          <View style={styles.viewImage}>
            <Image
              style={styles.imageProfile}
              source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/sokaniwaal/128.jpg',
              }}
            />
          </View>

          <Input
            label="Nombre Completo"
            labelStyle={{color: colors.secondary}}
            inputStyle={{
              backgroundColor: !edit ? '#fafafa' : null,
              height: 8,
              color: !edit ? '#9e9e9e' : null,
            }}
            defaultValue="312323213123"
            onChangeText={(value) => setName(value)}
          />
          <Input
            label="Correo electronico"
            labelStyle={{color: colors.secondary}}
            inputStyle={{
              backgroundColor: !edit ? '#fafafa' : null,
              height: 8,
              color: !edit ? '#9e9e9e' : null,
            }}
            defaultValue="312323213123"
            onChangeText={(value) => setEmail(value)}
          />
          <Input
            label="Contraseña"
            inputStyle={{
              backgroundColor: !edit ? '#fafafa' : null,
              height: 8,
              color: !edit ? '#9e9e9e' : null,
            }}
            defaultValue="312323213123"
            editable={false}
            labelStyle={{color: colors.secondary}}
            onChangeText={(value) => setPassword(value)}
          />

          <Input
            label="Direccion"
            labelStyle={{color: colors.secondary}}
            inputStyle={{
              backgroundColor: !edit ? '#fafafa' : null,
              height: 8,
              color: !edit ? '#9e9e9e' : null,
            }}
            defaultValue="calle 34 # 45 12 "
            keyboardType={'default'}
            editable={edit}
            onChangeText={(value) => setPhone(value)}
          />

          {edit ? (
            <Button
              title="Actualizar"
              buttonStyle={styles.btnProfile}
              onPress={Editing}
            />
          ) : (
            <Button
              title="Editar Informacion"
              buttonStyle={styles.btnProfile}
              onPress={Editing}
            />
          )}
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
    elevation: 3,
    marginBottom: 16,
  },
  viewImage: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  imageProfile: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },

  btnProfile: {
    backgroundColor: colors.primary,
    borderRadius: 8,
  },
});
