
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCbervf3WRpaGJwnB7lCDsbesm_Oy0aZS4",
  authDomain: "rps-multiplayer-2f004.firebaseapp.com",
  databaseURL: "https://rps-multiplayer-2f004.firebaseio.com",
  projectId: "rps-multiplayer-2f004",
  storageBucket: "rps-multiplayer-2f004.appspot.com",
  messagingSenderId: "89212358265"
};

firebase.initializeApp(config);

var database = firebase.database();