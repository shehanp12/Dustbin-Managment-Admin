import  firebase from 'firebase/app';
import "firebase/firestore"
import "firebase/database"
import  "firebase/auth"

const app = firebase.initializeApp({
        apiKey: "AIzaSyAXH6DZRVpRNrrlSzXZsozRfiF0fYXdNmA",
        authDomain: "dustbin-management-f6197.firebaseapp.com",
        databaseURL: "https://dustbin-management-f6197.firebaseio.com",
        projectId: "dustbin-management-f6197",
        storageBucket: "dustbin-management-f6197.appspot.com",
        messagingSenderId: "1080411520816",
        appId: "1:1080411520816:web:5696e5e8d57dd5b71212f5",
        measurementId: "G-HGBQDBLQKF"

    });

 const projectFirestore = firebase.firestore();
const projectDatabase = firebase.database();
const projectAuh = firebase.auth();



export {projectFirestore,projectDatabase,projectAuh}

export default app

