import app from 'firebase/app';
var firebaseConfig = {
    apiKey: "AIzaSyD50Kj8pvNrh3CVFsrctALwqbTflnNazjY",
    authDomain: "private-notes-9cc59.firebaseapp.com",
    databaseURL: "https://private-notes-9cc59.firebaseio.com",
    projectId: "private-notes-9cc59",
    storageBucket: "private-notes-9cc59.appspot.com",
    messagingSenderId: "122552020693",
    appId: "1:122552020693:web:0d57b1482e43233d10fc5c"
  };
  // Initialize Firebase
  class Firebase {
    constructor() {
      app.initializeApp(firebaseConfig);
    }
  }
  export default Firebase;