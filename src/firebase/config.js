import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAeoiDikdsM1W0UMi9DOa2i_sbIk9hIwRU",
    authDomain: "fir-7265a.firebaseapp.com",
    projectId: "fir-7265a",
    storageBucket: "fir-7265a.appspot.com",
    messagingSenderId: "344965258040",
    appId: "1:344965258040:web:da7e0ea82b7b550e5fbfcd",
    measurementId: "G-HSWWP992W1"
  };

export default firebase.initializeApp(firebaseConfig);