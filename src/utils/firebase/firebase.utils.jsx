import {initializeApp} from "firebase/app"
import {getAuth,
  signInWithPopup,
  signInWithRedirect,
   GoogleAuthProvider,
  createUserWithEmailAndPassword} from "firebase/auth"
import {getFirestore,doc,getDoc,setDoc} from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyD_2zEmCdpkV25uqIA06J4Zhi19XUDF0Xk",
    authDomain: "crwn-clothing-db-b94ed.firebaseapp.com",
    projectId: "crwn-clothing-db-b94ed",
    storageBucket: "crwn-clothing-db-b94ed.appspot.com",
    messagingSenderId: "531425118909",
    appId: "1:531425118909:web:67c589575e8ffdacc305d4"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider({
    prompt:"select_account"
  })
  export const auth = getAuth()
  export const signInWithGooglePopup = () => signInWithPopup(auth,provider)
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth,provider)
  export const db = getFirestore()

  export const createUserDocFromAuth = async(userAuth,additionalInfo={}) => {
    const userDocRef = doc(db,"users",userAuth.uid )
    console.log(userDocRef) 

    const userSnapShot  = await getDoc(userDocRef)
    console.log(userSnapShot.exists())

    if(!userSnapShot.exists()){
        const {displayName,email} = userAuth;
        const creatDate = new Date()


        try {
            await setDoc(userDocRef,{
                displayName,
                email,
                creatDate,
                ...additionalInfo
            })
        }catch(err) {
            console.log(err)
        }
    }
  }

  export const createUserWithEmailandPasswordFromUser = async(email,password)=>{
    if(!email||!password) return;

    return await createUserWithEmailAndPassword(auth,email,password)

    
   
  } 