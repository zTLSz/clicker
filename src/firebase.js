import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';

const config = {
    apiKey: "AIzaSyCdrmLMipFsOhKB1XMxff-aw3_eIO6HG0k",
    authDomain: "clickergame-1eecc.firebaseapp.com",
    databaseURL: "https://clickergame-1eecc.firebaseio.com",
    projectId: "clickergame-1eecc",
    storageBucket: "clickergame-1eecc.appspot.com",
    messagingSenderId: "817469791293",
    appId: "1:817469791293:web:ed7a641a3de85731631e54",
    measurementId: "G-N6DJYQM1ZH"
}
firebase.initializeApp(config);
firebase.analytics();
const databaseRef = firebase.database().ref();
export const ui = new firebaseui.auth.AuthUI(firebase.auth());
export const clickerRef = databaseRef.child("clicker")