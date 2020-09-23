import * as types from '../types';
import firestore from '@react-native-firebase/firestore';

export const getInfouser = (user) => {
  return (dispatch) => {
    firestore()
      .collection('users')
      .doc(id)
      .get()
      .then((user) => {
        dispatch({
          type: types.SAVE_INFO_USER,
          payload: user,
        });
      });
  };
};
