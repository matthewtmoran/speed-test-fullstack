import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyDKvuTYT3-zm1bXLGNTXd0mdOSAqq4OOCg",
  authDomain: "speed-test-79ea2.firebaseapp.com",
  databaseURL: "https://speed-test-79ea2.firebaseio.com",
  projectId: "speed-test-79ea2",
  storageBucket: "",
  messagingSenderId: "780299953941"
};



firebase.initializeApp(config);

export const auth = firebase.auth();
export default firebase;