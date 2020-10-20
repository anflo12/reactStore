import auth from '@react-native-firebase/auth';
import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import Boot from './navigation/Boot';
import { persistor, store } from './redux/store';
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
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Boot isLogin={isLogin} />
        </PersistGate>
      </Provider>
    );
  }
};

export default App;
