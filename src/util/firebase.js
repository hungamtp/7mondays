import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDeikuzWNX8E3MeNivbzdfjcbZ6AK8h14k",
  authDomain: "to-fukcin-do.firebaseapp.com",
  databaseURL: "https://to-fukcin-do-default-rtdb.firebaseio.com",
  projectId: "to-fukcin-do",
  storageBucket: "to-fukcin-do.appspot.com",
  messagingSenderId: "719198772522",
  appId: "1:719198772522:web:683d846e93494b4bdd9253",
  measurementId: "G-4GYHPDZBQS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
