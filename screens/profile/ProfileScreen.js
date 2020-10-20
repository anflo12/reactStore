import auth from '@react-native-firebase/auth';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Card, Image, Input} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {connect} from 'react-redux';
import colors from '../../assets/colors';
import {updateInfoUser} from '../../redux/actions/auth.action';
import ImagePicker from 'react-native-image-picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
function ProfileScreen({userInfo, onSetInformation}) {
  const {name, address, email, photo} = userInfo;

  console.log(photo);
  const [Name, setName] = useState(name);
  const [Email, setEmail] = useState(email);
  const [Address, setAddress] = useState(address);
  const [Password, setPassword] = useState('');
  const [edit, setedit] = useState(false);
  const [Photo, setPhoto] = useState(photo);
  const updateInfo = () => {
    const user = {
      name: Name,
      email: Email,
      address: Address,
      photo: Photo,
    };

    const id = auth().currentUser.uid;
    onSetInformation(id, user);
    setedit(false);
  };

  const chooseImage = () => {
    let options = {
      title: 'Seleccione o tome una foto',

      mediaType: 'photo',
      storageOptions: {
        skipBackup: true,
      },
    };

    if (edit) {
      ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          setPhoto(response.uri);
        }
      });
    }
  };
  return (
    <View style={{backgroundColor: colors.background, flex: 1}}>
      <KeyboardAwareScrollView>
        <Card containerStyle={styles.card}>
          <View style={styles.viewImage}>
            <View>
              <Image
                style={styles.imageProfile}
                source={{
                  uri: Photo,
                }}
              />
            </View>

            <TouchableOpacity
              style={[styles.imageProfile, styles.overlay]}
              onPress={chooseImage}>
              <View style={styles.btnProfileImage}>
                <FontAwesome5
                  name={'edit'}
                  solid
                  size={25}
                  style={{marginVertical: 12}}
                />
              </View>
            </TouchableOpacity>
          </View>

          <Input
            label="Nombre Completo"
            labelStyle={{color: colors.secondary}}
            inputStyle={{
              backgroundColor: !edit ? '#fafafa' : null,
              height: 8,
              color: !edit ? '#9e9e9e' : null,
            }}
            defaultValue={Name}
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
            defaultValue={Email}
            onChangeText={(value) => setEmail(value)}
          />
          <Input
            label="Contraseña"
            inputStyle={{
              backgroundColor: !edit ? '#fafafa' : null,
              height: 8,
              color: !edit ? '#9e9e9e' : null,
            }}
            secureTextEntry={true}
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
            defaultValue={Address}
            keyboardType={'default'}
            editable={edit}
            onChangeText={(value) => setAddress(value)}
          />

          {edit ? (
            <Button
              title="Actualizar"
              buttonStyle={styles.btnProfile}
              onPress={updateInfo}
            />
          ) : (
            <Button
              title="Editar Informacion"
              buttonStyle={styles.btnProfile}
              onPress={() => setedit(true)}
            />
          )}
        </Card>
      </KeyboardAwareScrollView>
    </View>
  );
}

const mapStateToprops = (state) => {
  return {
    userInfo: state.auth.user,
  };
};

const mapDispacthToProps = (dispatch) => {
  return {
    onSetInformation: (id, user) => {
      dispatch(updateInfoUser(id, user));
    },
  };
};

export default connect(mapStateToprops, mapDispacthToProps)(ProfileScreen);
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

  btnProfileImage: {
    opacity: 0.5,
    backgroundColor: colors.background,

    width: 120,
    borderBottomRightRadius: 120,
    borderBottomLeftRadius: 120,
    alignItems: 'center',
    marginBottom: 0,
  },
  overlay: {
    position: 'absolute',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 12,
  },
});
