import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    projectId: "projectdynamic-c443e",
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const firestoreDB = getFirestore(firebaseApp);
console.log("initialized firebase connection");