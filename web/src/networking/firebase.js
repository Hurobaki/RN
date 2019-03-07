import firebase from 'firebase/app';
import 'firebase/functions';
import 'firebase/auth'

export const uploadUsers = firebase.functions().httpsCallable('uploadUsers');

export const firebaseSignIn = async (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);
