import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
 import { seedDatabase } from '../seed';

 const config = {
  apiKey: "AIzaSyBGF3Lyyy5asGJfHBxo4nQj8OJ6RX9EjGk",
  authDomain: "testing-ccead.firebaseapp.com",
  databaseURL: "https://testing-ccead.firebaseio.com",
  projectId: "testing-ccead",
  storageBucket: "testing-ccead.appspot.com",
  messagingSenderId: "242354331437",
  appId: "1:242354331437:web:5af27f01d9fb9fa3a17da4",
  measurementId: "G-DRBJ1PD6J5"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
 seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

//export { firebase };
