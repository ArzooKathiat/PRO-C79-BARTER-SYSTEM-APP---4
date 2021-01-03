import firebase from 'firebase'
require('@firebase/firestore')



var firebaseConfig = {
    apiKey: "AIzaSyAEpP3mQQONsc2v60URHFoiuGwcd0LbRkE",
    authDomain: "bartersystemapp-b2475.firebaseapp.com",
    projectId: "bartersystemapp-b2475",
    storageBucket: "bartersystemapp-b2475.appspot.com",
    messagingSenderId: "305330471826",
    appId: "1:305330471826:web:5bc49c66841925e345b74b"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();