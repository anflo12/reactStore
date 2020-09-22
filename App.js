import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import 'react-native-gesture-handler';
import {Text, View} from 'react-native';
import Boot from './navigation/Boot';
import SplashScreen from './screens/SplashScreen';

const App = () => {
  const [isLogin, setIslogin] = useState(false);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      changeStatusUser();
      setloading(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [isLogin]);

  const changeStatusUser = () => {
    auth().onAuthStateChanged(function (user) {
      if (user) {
        setIslogin(true);
      } else {
        setIslogin(false);
      }
    });
  };

  if (!loading) {
    return <SplashScreen />;
  } else {
    return <Boot isLogin={isLogin} />;
  }
};

export default App;
