import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDhogJWZvhvWa6CK6tb5Ro95Mb5K2L-QBo",
    authDomain: "catch-of-the-day-maximo.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-maximo.firebaseio.com",
});

const Base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default Base;