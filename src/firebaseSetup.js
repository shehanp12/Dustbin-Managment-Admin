import { firebaseConfig } from "./firebaseConfig";
import * as Firebase from "firebase/app";
import "firebase/auth";

// Initialize Firebase
const firebase = Firebase.initializeApp(firebaseConfig);

export default firebase;
