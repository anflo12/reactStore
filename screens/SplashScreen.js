import React from 'react';
import {View, Text} from 'react-native';
import * as Animatable from 'react-native-animatable';
import colors from '../assets/colors';

export default function SplashScreen() {
  return (
    <View
      style={{
        backgroundColor: colors.header,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Animatable.Image
        animation="pulse"
        easing="ease-out"
        iterationCount="infinite"
        source={require('../assets/images/SplashLogo.png')}
        style={{width:230,height:190}}
      />
    </View>
  );
}
