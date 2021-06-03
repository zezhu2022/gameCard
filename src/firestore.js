import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDkH3vsKQwO6Ru6KSkne6m347gpSwyhpYk",
    authDomain: "gamecards-13d2a.firebaseapp.com",
    projectId: "gamecards-13d2a",
    storageBucket: "gamecards-13d2a.appspot.com",
    messagingSenderId: "75714977445",
    appId: "1:75714977445:web:b8bd7f78827f0cc9b6774c",
    measurementId: "G-FJV5TXZH95"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;