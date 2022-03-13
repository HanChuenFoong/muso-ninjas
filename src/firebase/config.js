import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCcSHnQTxRgasduD1LUwHBQbendExqyF1A",
    authDomain: "fb9-reading-list-c64f2.firebaseapp.com",
    projectId: "fb9-reading-list-c64f2",
    storageBucket: "fb9-reading-list-c64f2.appspot.com",
    messagingSenderId: "942007464692",
    appId: "1:942007464692:web:953c7c8b838f2a501ce4a1"
};

// init firebase
initializeApp(firebaseConfig)

// init services
const db = getFirestore()
const auth = getAuth()

export { db, auth }