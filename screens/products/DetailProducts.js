import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, Image} from 'react-native-elements';
import colors from '../../assets/colors';

export default function DetailProducts({route}) {
  const {item} = route.params;

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Image
        source={{uri: item.image}}
        style={{width: 150, height: 230, marginTop: 20}}
      />

      <Text style={styles.titleproduct}>{item.name} </Text>
      <Text style={styles.textFeatures}>Carateristicas</Text>
      <Text style={styles.textDetails}>{item.details} </Text>

      <View style={{flexDirection:'row', marginTop:31 , justifyContent:'flex-start'}}>
        <Button
          title="Comprar"
          buttonStyle={{backgroundColor: '#FFBC5A' , marginRight:26,width:'70%'}}
          onPress={() =>{}}
        />

        <Button
          title="Agregar al carrito"
          buttonStyle={{backgroundColor: '#FFBC5A' }}
          onPress={()=>{}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleproduct: {
    fontSize: 24,
    color: colors.secondary,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
  },

  textDetails: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
  },

  textFeatures: {
    marginTop: 30,
    color: colors.secondary,
    fontSize: 20,
  },
});
