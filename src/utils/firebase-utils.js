// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore, collection, setDoc,getDocs,deleteDoc,doc,addDoc,deleteField,query,where} from 'firebase/firestore';
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,updateProfile, GoogleAuthProvider, signInWithPopup, onAuthStateChanged} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyA4cr77H0yPs3rQmGPMZYzui7EHyl1VEfg",
  authDomain: "wordflash-643e5.firebaseapp.com",
  projectId: "wordflash-643e5",
  storageBucket: "wordflash-643e5.appspot.com",
  messagingSenderId: "390574381418",
  appId: "1:390574381418:web:17a65105a3bc5ee1962d13",
  measurementId: "G-K9ERP6337C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();
export const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});



//Word Related Functions
  export const addWord = async (word) => {
    try {
      const wordRef = await addDoc(collection(db, 'words'), word);
      console.log('Word added successfully:', word.originalWord);
      return wordRef;
    } catch (error) {
      console.error('Error adding word:', error);
      throw error;
    }
  }

  export const getWords = async (userId) => {
    try {
      const wordsRef = collection(db, 'words');
      const q = query(wordsRef, where('userId', '==', userId));
      const querySnapshot = await getDocs(q);
      const words = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      console.log('Words retrieved successfully:', words);
      return words;
    } catch (error) {
      console.error('Error retrieving words:', error);
      throw error;
    }
  }

  export const deleteWord = async (wordId) => {
    try {
      await deleteDoc(doc(db, 'words', wordId));
      console.log('Word deleted successfully:', wordId);
    } catch (error) {
      console.error('Error deleting word:', error);
      throw error;
    }
  }


//User Related Functions
export const signUpWithEmailAndPassword = async (auth, email, password, displayName) => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      
      if (user) {
        // If there's a displayName provided, update it.
        if (displayName) {
          await updateProfile(user, {
            displayName: displayName
          });
          console.log('User display name set:', displayName);
        }
        
        // Store the date of creation in Firebase Firestore
        const creationDate = new Date().toISOString();  // Current date and time in ISO format
        const userRef = doc(db, 'users', user.uid);
        await setDoc(userRef, {
          creationDate: creationDate,
          displayName: displayName,
          email: email,
          userId: user.uid,
        }, { merge: true });  // The merge: true ensures we don't overwrite existing user data
        
        console.log('User created successfully with creation date:', user, creationDate);
      }
  
      return user;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }

export const signInUserWithEmailAndPassword = async (auth, email, password) => {
    if(!email || !password) {
      return;
    }
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('User signed in successfully:', userCredential);
    return userCredential;
  };

export const signInWithGoogle = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      const isNewUser = userCredential._tokenResponse.isNewUser;
      if(isNewUser) {
       // Store the date of creation in Firebase Firestore or Realtime Database
        const creationDate = new Date().toISOString(); 
        const userRef = doc(db, 'users', userCredential.user.uid);
        await setDoc(userRef, {
          creationDate: creationDate,
          displayName: userCredential.user.displayName,
          email: userCredential.user.email,
          userId: userCredential.user.uid,
        }, { merge: true }); // The merge: true ensures we don't overwrite existing user data
      } 
      return userCredential;
    } catch (error) {
        throw error;
    }
  };
  

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

export const signOutUser = async () => await signOut(auth);
