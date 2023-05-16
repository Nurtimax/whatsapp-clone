import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
   apiKey: 'AIzaSyCc5dxK6ceGgzUT6KiaAneD8nsQdI8gNE4',
   authDomain: 'whatsapp-clone-3b46f.firebaseapp.com',
   projectId: 'whatsapp-clone-3b46f',
   storageBucket: 'whatsapp-clone-3b46f.appspot.com',
   messagingSenderId: '713322077143',
   appId: '1:713322077143:web:7cab841953fafd30688992',
   measurementId: 'G-62HQCPBFFG'
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
