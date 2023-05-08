import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc,collection,writeBatch,query,getDocs } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD_2zEmCdpkV25uqIA06J4Zhi19XUDF0Xk",
  authDomain: "crwn-clothing-db-b94ed.firebaseapp.com",
  projectId: "crwn-clothing-db-b94ed",
  storageBucket: "crwn-clothing-db-b94ed.appspot.com",
  messagingSenderId: "531425118909",
  appId: "1:531425118909:web:67c589575e8ffdacc305d4",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider({
  prompt: "select_account",
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);
export const db = getFirestore();

export const  addCollectionAndDocuments = async(collectionKey,ObjectsToAdd)=>{
  const collectionRef = collection(db,collectionKey)
  const batch = writeBatch(db)
  ObjectsToAdd.forEach((object)=>{
    const docRef =doc(collectionRef,object.title.toLowerCase())
    batch.set(docRef,object)
  }) 
  await batch.commit()
  console.log("done")

}
export const getCategoriesAndDoc = async()=>{
  const collectiionRef = collection(db,'categories')
  const q = query(collectiionRef)
  const querySnapShot = await getDocs(q)
  const categoryMap = querySnapShot.docs.reduce((acc,docSnapShot)=>{
    const {title,items} = docSnapShot.data()
    acc[title.toLowerCase() ]= items
    return acc;

  },{ })
  return categoryMap
}

export const createUserDocFromAuth = async (userAuth, additionalInfo = {}) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot.exists());
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const creatDate = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        creatDate,
        ...additionalInfo,
      });
    } catch (err) {
      console.log(err);
    }
  }
};
export const createUserWithEmailandPasswordFromUser = async (
  email,
  password
) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInWithEmailandPasswordFromUser = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  await signOut(auth);
};
export const onAuthStateChangedListner = (callback) => {
  onAuthStateChanged(auth, callback);
};
