import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../../assets/colors'
import { Card, Image, Button } from 'react-native-elements'
export default function OffersItems({item,index}) {
    let desc = item.price*0.20
    let offer = item.price-desc
    return (
        <Card containerStyle={{width: 175, margin: 2, padding: 0}}>
        <Image
          source={{uri: item.image}}
          style={{width: 160, height: 200, marginHorizontal:6,marginVertical:5}}
        />
        <Text style={styles.titleproduct}>{item.name}</Text>
        <View style={{flexDirection: 'row', paddingLeft: 5}}>
          <Text style={{fontWeight: 'bold'}}>Precio normal: </Text>
          <Text>{item.price}</Text>
        </View>
        <View style={{flexDirection: 'row', paddingLeft: 5}}>
          <Text style={{fontWeight: 'bold',color:'red'}}>Precio oferta: </Text>
          <Text style={{color:'red'}}>{offer}</Text>
        </View>
        <Button title="Detalles" buttonStyle={styles.buttonDetails} />
      </Card>
    )
}

const styles = StyleSheet.create({
    titleproduct: {
        fontSize: 18,
        color: colors.secondary,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 12,
        paddingLeft: 5,
      },
    
      buttonDetails: {backgroundColor: colors.primary, margin: 5, marginTop: 10},
})