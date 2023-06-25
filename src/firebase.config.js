import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCeOeM0si5JNiqxhsGCkcVowkaGXzjzFb4",
  authDomain: "car-rental-b11a1.firebaseapp.com",
  projectId: "car-rental-b11a1",
  storageBucket: "car-rental-b11a1.appspot.com",
  messagingSenderId: "956040708502",
  appId: "1:956040708502:web:9ad3834485913b03aeddb7"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)


export default app;