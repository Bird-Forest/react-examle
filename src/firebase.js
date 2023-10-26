import { initializeApp } from 'firebase/app';

export const firebaseConfig = {
  apiKey: 'AIzaSyAOzBw68AkTLM3XxGX_lufrbwvGXTfx03k',
  authDomain: 'userform-register.firebaseapp.com',
  projectId: 'userform-register',
  storageBucket: 'userform-register.appspot.com',
  messagingSenderId: '623815394974',
  appId: '1:623815394974:web:0a7572775f31bf59339d8f',
  measurementId: 'G-B289JB0TL9',
};

const app = initializeApp(firebaseConfig);
console.log(app);
