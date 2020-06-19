import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import Carousel from 'react-native-snap-carousel';
import colors from '../assets/colors';
import OffersItems from '../components/home/OffersItems';

export default function HomeScreen({navigation}) {
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

  const width = Dimensions.get('screen').width;
  const _body = ({item, index}) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("products", { id: 1 })}>
        <ImageBackground
          source={{uri: item.image}}
          style={{width: '101%', height: 165}}>
          <View style={styles.containerCategories}>
            <Text style={styles.textCategories}>{item.name}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };
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
          renderItem={_body}
        />
        <Text style={styles.title2}>Productos en oferta</Text>

        <FlatList
          data={data}
          numColumns={2}
          renderItem={({item, index}) => (
            <OffersItems item={item} index={index} />
          )}
          keyExtractor={(item, index) => index + ''}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.secondary,
    marginTop: '8%',
    marginBottom: '4%',
    marginLeft: 8,
  },

  title2: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.secondary,
    marginTop: 40,
    marginLeft: 8,
  },
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
});
