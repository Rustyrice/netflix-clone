import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyCI5bI2EUvaoZOlqi99qwrdhh5SLHwxnBg",
  authDomain: "netflix-6461d.firebaseapp.com",
  databaseURL: "https://netflix-6461d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "netflix-6461d",
  storageBucket: "netflix-6461d.appspot.com",
  messagingSenderId: "550932687103",
  appId: "1:550932687103:web:d16ce54debf2fc447e84ca"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
