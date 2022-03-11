import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDf_aBBPlojPeSE4_TJYlD6O-2bB6oeQBA",
    authDomain: "muso-ninjas-2a663.firebaseapp.com",
    projectId: "muso-ninjas-2a663",
    storageBucket: "muso-ninjas-2a663.appspot.com",
    messagingSenderId: "617762071742",
    appId: "1:617762071742:web:42ff8aebd60830c4162aef"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }