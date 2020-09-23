import React, {useState} from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Image} from 'react-native-elements';
import {SliderBox} from 'react-native-image-slider-box';
import colors from '../../assets/colors';
import GenericList from '../../components/itemsProducts/GenericList';

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
      name: 'Electrodomesticos',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQe6TJmIMxlh4hzlOwktBdaqnSSkTZzvqztwIXwVNB1TLbVg36Q&usqp=CAU',
    },
  ];

  const data = [
    {
      name: 'IPHONE 7 PLUS',
      image:
        'https://mac-center.com/wp-content/uploads/2020/06/iPhone7NegroMate-1.jpg',
      price: 120000,
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    },

    {
      name: 'nevera plus',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLkWk4XcMRgfFHl1w4IfsiQlFj56YcS0ThjA&usqp=CAU',
      price: 120000,
    },

    {
      name: 'Xbox One',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQnRa_5zTJEHlDvyq0JJUOF9vgdbSIeMtoCFw&usqp=CAU',
      price: 140000,
    },
  ];

  const _body = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('products', {id: '001'})}>
        <View style={styles.containerImage}>
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
    marginBottom: 10,
    marginLeft: 8,
    textDecorationLine: 'underline',
  },
  containerImage: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 8,
  },

  textCategories: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
  },
});
