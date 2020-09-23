import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import {Card, Image, Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
export default function ItemsGeneric({item}) {
  const navigation = useNavigation();
  return (
    <Card containerStyle={styles.containerItems}>
      <Image
        source={{uri: item.image}}
        resizeMode={'contain'}
        style={styles.imageItem}
      />
      <Text style={styles.titleproduct}>{item.name}</Text>
      <View style={{flexDirection: 'row', paddingLeft: 6}}>
        <Text style={{fontWeight: '200'}}>Precio normal: </Text>
        <Text>{item.price}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingLeft: 6,
          justifyContent: 'flex-start',
        }}>
        <Text style={{fontWeight: '600', color: colors.secondary}}>
          Oferta:{' '}
        </Text>
        <Text style={{color: colors.secondary}}>20%</Text>
      </View>
      <Button
        title="Detalles"
        buttonStyle={styles.buttonDetails}
        onPress={()=>navigation.navigate('detailProduct',{item:item})}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  titleproduct: {
    fontSize: 16,
    color: colors.secondary,
    fontWeight: 'bold',
    paddingLeft: 6,
  },

  containerItems: {
    width: 160,
    height: 'auto',
    padding: 0,
    borderRadius: 5,
    elevation: 5,
    margin: 8,
    marginBottom: 12,
  },
  imageItem: {
    width: '85%',
    height: 145,
    margin: 10,
  },
  buttonDetails: {backgroundColor: colors.primary, margin: 5, marginTop: 10},
});
