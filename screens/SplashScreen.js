import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';
import colors from '../assets/colors';

export default function SplashScreen() {
  return (
    <View style={styles.view}>
      <Animatable.Image
        animation="pulse"
        easing="ease-out"
        iterationCount="infinite"
        source={require('../assets/images/SplashLogo.png')}
        style={{width: 230, height: 190}}
      />

      <Animatable.Text
        animation="pulse"
        easing="ease-out"
        style={styles.text}
        iterationCount="infinite">
        Tu mercado facil y rapido
      </Animatable.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: colors.header,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});
