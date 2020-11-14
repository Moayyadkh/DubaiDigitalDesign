import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
 import { seedDatabase } from '../seed';

const config = {
  
    apiKey: "AIzaSyCJu6wQc-5-l-dcMsCkTelpNxVu-L_4lBs",
    authDomain: "netflix-28e7a.firebaseapp.com",
    databaseURL: "https://netflix-28e7a.firebaseio.com",
    projectId: "netflix-28e7a",
    storageBucket: "netflix-28e7a.appspot.com",
    messagingSenderId: "921283875610",
    appId: "1:921283875610:web:d810999f38c3b7c53e12a3"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
