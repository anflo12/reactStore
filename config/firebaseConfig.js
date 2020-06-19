import * as firebase from 'firebase';
import 'firebase/firebase-firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyCsixMEJxBR8yJMp4rGQjw9rVYGMZxwcbA',
  authDomain: 'react-store-989fb.firebaseapp.com',
  databaseURL: 'https://react-store-989fb.firebaseio.com',
  projectId: 'react-store-989fb',
  storageBucket: 'react-store-989fb.appspot.com',
  messagingSenderId: '365470919849',
  appId: '1:365470919849:web:102f675199484e1424cdb8',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth()

export const firestore =  firebase.firestore()