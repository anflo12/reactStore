import React,{useState,useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {Card, Image, Button} from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';
import colors from '../../assets/colors';
import ItemsGeneric from './ItemsGeneric';

export default function GenericList({ route, navigation ,data}) {
const [Products, setProducts] = useState([])

  

useEffect(() => {

    
    firestore().collection('products').onSnapshot((querySnapshot) => {
      const docs = [];

      querySnapshot.forEach((doc) => {
        docs.push(doc.data());
      });
      setProducts(docs);  
    });
}, [])

 

  return (
    <View>
      <FlatList
        data={data}
        style={{marginHorizontal:4.5}}
        numColumns={2}
        renderItem={({item, index}) => <ItemsGeneric  item={item} index={index}/>}
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
