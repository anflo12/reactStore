import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Image} from 'react-native-elements';
import {SliderBox} from 'react-native-image-slider-box';
import colors from '../assets/colors';
import GenericList from '../components/itemsProducts/GenericList';

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
        'https://falabella.scene7.com/is/image/FalabellaCO/3929421_1?wid=800&hei=800&qlt=70',
      price: 120000,
    },
    {
      name: 'IPHONE 7 PLUS',
      image:
        'https://falabella.scene7.com/is/image/FalabellaCO/3929421_1?wid=800&hei=800&qlt=70',
      price: 120000,
    },
    {
      name: 'IPHONE 7 PLUS',
      image:
        'https://falabella.scene7.com/is/image/FalabellaCO/3929421_1?wid=800&hei=800&qlt=70',
      price: 120000,
    },

    {
      name: 'IPHONE 7 PLUS',
      image:
        'https://falabella.scene7.com/is/image/FalabellaCO/3929421_1?wid=800&hei=800&qlt=70',
      price: 120000,
    },
  ];

  const width = Dimensions.get('screen').width;
  const _body = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('products', {id: '001'})}>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            marginHorizontal: 8,
          
          }}>
          <Image
            source={{uri: item.image}}
            style={{width: 110, height: 110, borderRadius: 60}}
          />
          <Text style={styles.textCategories}>{item.name}</Text>
        </View>
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

        <FlatList
          data={ENTRIES1}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => _body(item, index)}
          keyExtractor={(item, index) => index + ''}
        />
        <Text style={styles.title2}>Productos en oferta</Text>

        <GenericList data={data} />
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
    textDecorationLine: 'underline',
  },

  title2: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.secondary,
    marginTop: 30,
    marginBottom:10,
    marginLeft: 8,
    textDecorationLine: 'underline',
    
    
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
    textAlign: 'center',
  },
});
