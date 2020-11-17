import { firebaseConfig } from "./firebaseConfig";
import "firebase/auth";
import "firebase/firestore";
import Firebase from "firebase";
// Initialize Firebase
const fire = Firebase.initializeApp(firebaseConfig);

export default fire;
