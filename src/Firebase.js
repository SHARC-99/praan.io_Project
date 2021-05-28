import firebase from 'firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyCHu2jRxsadwU0VqYsRqPEoaTNNdTgPTUU",
    authDomain: "praanproject.firebaseapp.com",
    databaseURL: "https://praanproject-default-rtdb.firebaseio.com",
    projectId: "praanproject",
    storageBucket: "praanproject.appspot.com",
    messagingSenderId: "22272820510",
    appId: "1:22272820510:web:f5ee8175da2004aa39350f",
    measurementId: "G-68G3EYBGZF"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;