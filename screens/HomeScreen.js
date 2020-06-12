import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import Carousel from 'react-native-snap-carousel';

import colors from '../assets/colors';
import {Card, Image, Button} from 'react-native-elements';

export default function HomeScreen() {
  const [Images, setImages] = useState([
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnaifS_R_GkhYR-wF1Vqntb4bp6CVVBnZbuftyRRXNStesBFhI&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSUI_qKvtNqiMt8eK5hN0y17DQJ6tiS5bBlRNcnrz06mHFO-nEz&usqp=CAU',
    
  ]);

  const ENTRIES1 = [
    {
      name: 'Celulares',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQRBj63NQ6h5-uN88nghaLJTq_K979JoIkBvb7uwZEb7_Dlu-Cx&usqp=CAU',
    },
    {
      name: 'Computadores',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSsVm9d9ucdDkgdCAeSEY7LGq-hlYWHy2g66aaG6r6KKw84iA8-&usqp=CAU',
    },
    {
      name: 'Videojuegos',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSR8Dlhi_2tpAQljuu4O6rr1p50D-1SaFpoUl8mUeZ80fnBUJz5&usqp=CAU',
    },
    {
      name: 'Eletrodomesticos',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQe6TJmIMxlh4hzlOwktBdaqnSSkTZzvqztwIXwVNB1TLbVg36Q&usqp=CAU',
    },
  ];

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

  const _renderItem = ({item, index}) => {
    return (
      <ImageBackground
        source={{uri: item.image}}
        style={{width: '101%', height: 165}}>
        <View style={styles.containerCategories}>
          <Text style={styles.textCategories}>{item.name}</Text>
        </View>
      </ImageBackground>
    );
  };

  const renderItemsList = (item, index) => {
    let desc = item.price*0.20
    let offer = item.price-desc
    return (
      
      <Card containerStyle={{width: 160, margin: 9, padding: 0}}>
        <Image
          source={{uri: item.image}}
          style={{width: 160, height: 200, margin: 0}}
        />
        <Text style={styles.titleproduct}>{item.name}</Text>
        <View style={{flexDirection: 'row', paddingLeft: 5}}>
          <Text style={{fontWeight: 'bold'}}>Precio normal: </Text>
          <Text>{item.price}</Text>
        </View>
        <View style={{flexDirection: 'row', paddingLeft: 5}}>
          <Text style={{fontWeight: 'bold'}}>Precio oferta: </Text>
          <Text>{offer}</Text>
        </View>
        <Button title="Detalles" buttonStyle={styles.buttonDetails} />
      </Card>
    );
  };
  const width = Dimensions.get('screen').width;

  return (

  
    <View>
      <ScrollView>
        <SliderBox
          images={Images}
          onCurrentImagePressed={(index) =>
            console.log(`image ${index} pressed`)
          }
          currentImageEmitter={(index) =>
            console.log(`current pos is: ${index}`)
          }
        />

        <Text style={styles.title}>Categorias</Text>

        <Carousel
          data={ENTRIES1}
          itemWidth={width / 1.4}
          itemHeight={2}
          sliderWidth={width - 2}
          sliderHeight={0}
          renderItem={_renderItem}
        />
        <Text style={styles.title2}>Productos en oferta</Text>

        <FlatList
          data={data}
          numColumns={2}
          renderItem={({item, index}) => renderItemsList(item, index)}
          keyExtractor={(item, index) => index + ''}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerCategories: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: -10,
    marginTop: '49%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF80',
    height: 40,
  },

  textCategories: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 22,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.secondary,
    marginTop: '15%',
    marginBottom: '8%',
    marginLeft: 8,
  },

  title2: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.secondary,
    marginTop: 20,
    marginLeft: 8,
  },

  titleproduct: {
    fontSize: 18,
    color: colors.secondary,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 5,
    paddingLeft: 5,
  },

  buttonDetails: {backgroundColor: colors.primary, margin: 5, marginTop: 10},
});
