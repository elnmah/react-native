import firebase from 'firebase'

//autentificação do servidor firebase
let config = {
    apiKey: "AIzaSyASPzz_UPkgE6-OPmQAC6vzi9P8tfjHNcw",
    authDomain: "projeto-teste-5de81.firebaseapp.com",
    databaseURL: "https://projeto-teste-5de81.firebaseio.com",
    projectId: "projeto-teste-5de81",
    storageBucket: "projeto-teste-5de81.appspot.com",
    messagingSenderId: "1000958744261"
};

const Firebase = firebase.initializeApp(config);

export default Firebase;