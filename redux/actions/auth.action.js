import * as types from '../types';
import firestore from '@react-native-firebase/firestore';

export const getInfouser = (id) => {
  return (dispatch) => {
    firestore()
      .collection('users')
      .doc(id)
      .get()
      .then((user) => {
        return dispatch({
          type: types.SAVE_INFO_USER,
          payload: user.data(),
        });
      });
  };
};

export const updateInfoUser = (id, user) => {
  return (dispatch) => {
    firestore()
      .collection('users')
      .doc(id)
      .update(user)
      .then(() => {
        console.log("updated...")
        return dispatch({
          type: types.SAVE_INFO_USER,
          payload: user,
        });
      });
  };
};
