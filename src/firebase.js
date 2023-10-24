// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAOzBw68AkTLM3XxGX_lufrbwvGXTfx03k',
  authDomain: 'userform-register.firebaseapp.com',
  projectId: 'userform-register',
  storageBucket: 'userform-register.appspot.com',
  messagingSenderId: '623815394974',
  appId: '1:623815394974:web:0a7572775f31bf59339d8f',
  // measurementId: 'G-B289JB0TL9',
};

// Initialize Firebase
// const auth = getAuth(app);
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
