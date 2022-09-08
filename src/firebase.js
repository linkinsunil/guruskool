import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBntG3k9M-ek5v6ZXKb_S2ldjc8hcl9Mv0',
  authDomain: 'guruscool-62276.firebaseapp.com',
  projectId: 'guruscool-62276',
  storageBucket: 'guruscool-62276.appspot.com',
  messagingSenderId: '1080560074560',
  appId: '1:1080560074560:web:f2330616bde2a139aec4a5',
  measurementId: 'G-7EKMRWK77D',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
