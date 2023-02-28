import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {enableIndexedDbPersistence} from "firebase/firestore";
import {initializeFirestore, CACHE_SIZE_UNLIMITED} from "firebase/firestore";


const firebaseConfig = {
    projectId: "projectdynamic-c443e",
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const firestoreDB = initializeFirestore(firebaseApp, {cacheSizeBytes: CACHE_SIZE_UNLIMITED});
enableIndexedDbPersistence(firestoreDB).then(r => console.log("persisted"));
console.log("initialized firebase connection");