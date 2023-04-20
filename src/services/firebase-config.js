import { initializeApp } from 'firebase/app';
import { getAuth  } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDHP8ie4T_ZhrjrKU3wdmn4vtEGuyZTPqg',
  authDomain: 'naturel-gourmet.firebaseapp.com',
  projectId: 'naturel-gourmet',
  storageBucket: 'naturel-gourmet.appspot.com',
  messagingSenderId: '851238073891',
  appId: '1:851238073891:web:47d1c6d44309503e17e396',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();


