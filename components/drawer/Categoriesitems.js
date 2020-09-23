import React, {useEffect, useState} from 'react';
import {List} from 'react-native-paper';
import 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import firestore from '@react-native-firebase/firestore';

export default function Categoriesitems({navigation}) {
  const [Categories, setCategories] = useState([]);
  useEffect(() => {
    changeCategories();
  }, []);

  const changeCategories = async () => {
    firestore()
      .collection('categories')
      .onSnapshot((querySnapshot) => {
        const docs = [];

        querySnapshot.forEach((doc) => {
          docs.push(doc.data());
        });
        setCategories(docs);
      });
  };

  return (
    <List.Accordion
      title="Categorias"
      titleStyle={{color: 'black', marginLeft: 15}}
      style={{width: 200, marginLeft: 12, padding: 0}}
      left={() => (
        <FontAwesome5 name={'list'} size={20}  solid/>
      )}>
      {Categories.map((category) => {
        return (
          <List.Item
            key={category.id}
            title={category.name}
            style={{marginLeft: 20, padding: 5}}
            onPress={() => navigation.navigate('products', {id: 1})}
            left={() => (
              <FontAwesome5 name={category.icon}  size={20} solid />
            )}
          />
        );
      })}
    </List.Accordion>
  );
}
