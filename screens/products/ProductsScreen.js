import React from 'react'
import { View, Text } from 'react-native'
import GenericList from '../../components/itemsProducts/GenericList'

export default function ProductsScreen() {
    const data = [
        {
          name: 'IPHONE 7 PLUS',
          image:
            'https://www.cupononline.co/206-large_default/iphone-7-plus-32g.jpg',
          price: 120000,
        },
        {
          name: 'IPHONE 7 PLUS',
          image:
            'https://www.cupononline.co/206-large_default/iphone-7-plus-32g.jpg',
          price: 120000,
        },
        {
          name: 'IPHONE 7 PLUS',
          image:
            'https://www.cupononline.co/206-large_default/iphone-7-plus-32g.jpg',
          price: 120000,
        },
    
        {
          name: 'IPHONE 7 PLUS',
          image:
            'https://www.cupononline.co/206-large_default/iphone-7-plus-32g.jpg',
          price: 120000,
        },
      ];
    return (
        <View style={{flex:1}}>
           <GenericList data={data}/>
        </View>
    )
}
