import React,{useState,useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {Card, Image, Button} from 'react-native-elements';
import colors from '../assets/colors';

export default function GenericList({ route, navigation }) {
    const [data, setData] = useState([])
  const _renderItems = (item, index) => {
    let desc = item.price * 0.2;
    let offer = item.price - desc;
    return (
      <Card containerStyle={{width: 175, margin: 2, padding: 0}}>
        <Image source={{uri: item.image}} style={styles.imageproduct} />
        <Text style={styles.titleproduct}>{item.name}</Text>
        <View style={{flexDirection: 'row', paddingLeft: 5}}>
          <Text style={{fontWeight: 'bold'}}>Precio normal: </Text>
          <Text>{item.price}</Text>
        </View>
        <View style={{flexDirection: 'row', paddingLeft: 5}}>
          <Text style={{fontWeight: 'bold', color: 'red'}}>
            Precio oferta:{' '}
          </Text>
          <Text style={{color: 'red'}}>{offer}</Text>
        </View>
        <Button title="Detalles" buttonStyle={styles.buttonDetails} />
      </Card>
    );
  };

useEffect(() => {

    const { id } = route.params;

    let provisdata= datap.filter(item => item.category===id )
    setData(provisdata)
    
}, [])

  const datap = [
    {
      name: 'Samsung s6',
      image:
        'https://www.cupononline.co/206-large_default/iphone-7-plus-32g.jpg',
      price: 600000,
      category:1
    },
    {
      name: 'HP desco duro 500',
      image:
      'https://www.cupononline.co/206-large_default/iphone-7-plus-32g.jpg',
      price: 600000,
      category:2
    },

    {
        name: 'HP desco duro 500',
        image:
        'https://www.cupononline.co/206-large_default/iphone-7-plus-32g.jpg',
        price: 600000,
        category:2
      },
    {
      name: 'Nevera 30 lb',
      image:
      'https://www.cupononline.co/206-large_default/iphone-7-plus-32g.jpg',
      price: 600000,
      category:3
    },

    {
        name: 'Nevera 30 lb',
        image:
        'https://www.cupononline.co/206-large_default/iphone-7-plus-32g.jpg',
        price: 600000,
        category:3
      },{
        name: 'Nevera 30 lb',
        image:
        'https://www.cupononline.co/206-large_default/iphone-7-plus-32g.jpg',
        price: 600000,
        category:3
      },
  ];

  return (
    <View>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({item, index}) => _renderItems(item, index)}
        keyExtractor={(item, index) => index + ''}
      />
    </View>
  );
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

  buttonDetails: {
    backgroundColor: colors.primary,
    margin: 5,
    marginTop: 10,
  },
  imageproduct: {
    width: 160,
    height: 200,
    marginHorizontal: 6,
    marginVertical: 5,
  },
});
