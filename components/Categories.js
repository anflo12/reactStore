import React from 'react';
import {List} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';

const data = [
  {name: 'Celulares', icon: 'mobile-alt'},
  {name: 'Computadores', icon: 'desktop'},
];

export default function Categories({navigation}) {
  return (
    <List.Accordion
      title="Categorias"
      titleStyle={{color: 'black', marginLeft: 15}}
      style={{width: 200, marginLeft: 12, padding: 0}}
      left={(props) => (
        <Icon
          {...props}
          name="list"
          size={18}
          style={{marginLeft: 12}}
          color={'black'}
        />
      )}>
      {data.map((category) => {
        return (
          <List.Item
            title={category.name}
            style={{marginLeft: 20, padding: 5}}
            onPress={() => navigation.navigate('products', {id: 1})}
            left={(props) => (
              <Icon
                {...props}
                name={category.icon}
                size={20}
                style={{paddingRight: '10%'}}
              />
            )}
          />
        );
      })}
    </List.Accordion>
  );
}
