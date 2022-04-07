import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6opUUlxjjP1uAfTzDgdHVyVg-tTbxVqU",
  authDomain: "boardapp-374f5.firebaseapp.com",
  projectId: "boardapp-374f5",
  storageBucket: "boardapp-374f5.appspot.com",
  messagingSenderId: "1046575991283",
  appId: "1:1046575991283:web:67c5893c2a1396030aaa86",
  measurementId: "G-MFKD3FM9RD",
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
/*

  authDomain: "boardapp-374f5.firebaseapp.com",
      projectId: "boardapp-374f5",
      storageBucket: "boardapp-374f5.appspot.com",
      messagingSenderId: "1046575991283",
      appId: "1:1046575991283:web:67c5893c2a1396030aaa86",
      measurementId: "G-MFKD3FM9RD",
*/
