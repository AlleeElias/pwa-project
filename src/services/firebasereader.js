import {collection} from 'firebase/firestore';
import {firestoreDB} from "./firestore";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {PostList} from "../components/PostList";
import firebase from 'firebase/app';
import 'firebase/firestore';
import {postconverter} from "./postconverter";

//Declare collectionreference for use in firebasewriter
export const gamingReference = collection(firestoreDB, "gaming").withConverter(postconverter);
export const collectionReference = collection(firestoreDB, "collecting").withConverter(postconverter);

//Component 6
export function GamingReader() {
    const [values, loading, error] = useCollectionData(gamingReference);
    //console.log({values, loading, error});
    //console.log(values);

    return <PostList posts={values}></PostList>;
}

//Component 7
export function CollectionReader() {
    const [values, loading, error] = useCollectionData(collectionReference);
    //console.log({values, loading, error});
    //console.log(values);

    return <PostList posts={values}></PostList>;
}