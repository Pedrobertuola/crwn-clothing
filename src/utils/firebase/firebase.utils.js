import { initializeApp } from "firebase/app";
import {
  getAuth,
  //signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,    
} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBO8Qm3YOsZLWJ-vvqDvLmiYAkNss9pvlg",
  authDomain: "crwn-db-d4b7e.firebaseapp.com",
  projectId: "crwn-db-d4b7e",
  storageBucket: "crwn-db-d4b7e.appspot.com",
  messagingSenderId: "486808385983",
  appId: "1:486808385983:web:5917fc133f32efc5cdc90a",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();



provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());
    
    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log('Error creating the user', error.message);
        }
    }
    
    return userDocRef;
    


    //create / set the document with the data from userAuth in my collection

    //if user data exists

    

    //return userDocRef
};