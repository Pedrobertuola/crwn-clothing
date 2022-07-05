import { initializeApp } from 'firebase/app';
import { getAuth, SignInMethod, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBlhclWjRX4NclsYI4RYp4XainYE-ytRF8",
    authDomain: "crwn-clothing-db-7ba24.firebaseapp.com",
    projectId: "crwn-clothing-db-7ba24",
    storageBucket: "crwn-clothing-db-7ba24.appspot.com",
    messagingSenderId: "883484119072",
    appId: "1:883484119072:web:d21caa3016d41353d92c45"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore(); //const db = getFirestore(firebaseApp)

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    
    console.log(userDocRef);
    
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists())

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }
    return userDocRef;
}   

    //if user data exists

    //create /  set the document with the data from userAuth in my collection


    //return userDocRef
  