import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyCtFcUkX9NscEYugSHA_syoQMyhgrK5_e8",
  authDomain: "jactbox-games.firebaseapp.com",
  databaseURL: "https://jactbox-games.firebaseio.com",
  projectId: "jactbox-games",
  storageBucket: "jactbox-games.appspot.com",
  messagingSenderId: "445183082407"
};

firebase.initializeApp(config);
export default firebase;
