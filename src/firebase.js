import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyASL3FfgHDtXRyGkxnkb4iJZWw2vBoa50g',
  authDomain: 'whatsapp-clone-bbb6a.firebaseapp.com',
  databaseURL: 'https://whatsapp-clone-bbb6a.firebaseio.com',
  projectId: 'whatsapp-clone-bbb6a',
  storageBucket: 'whatsapp-clone-bbb6a.appspot.com',
  messagingSenderId: '344716567788',
  appId: '1:344716567788:web:749674be06e8f53feaf1c9',
  measurementId: 'G-NS4EK4V57L',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
