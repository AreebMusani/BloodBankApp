import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyDh2ZzB9IHThD5cA7EsIk1y4kpCEc6BodQ",
    authDomain: "nativeapp-51485.firebaseapp.com",
    databaseURL: "https://nativeapp-51485-default-rtdb.firebaseio.com",
    projectId: "nativeapp-51485",
    storageBucket: "nativeapp-51485.appspot.com",
    messagingSenderId: "606009047373",
    appId: "1:606009047373:web:f99c6eb6a0d732f2f29f04"
  };

const Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase
//export default firebase.initializeApp(firebaseConfig);