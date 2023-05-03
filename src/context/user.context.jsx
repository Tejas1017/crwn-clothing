import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListner,signOutUser ,createUserDocFromAuth} from "./../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvide = ({ children }) => {
 
  const [currentUser, setCurrentUser] = useState(null);
    
  useEffect(() => {
    const unsubcribe = onAuthStateChangedListner((user) => {
      if(user){
        createUserDocFromAuth(user)
      }
      console.log(user);
      setCurrentUser(user)
    });
    return unsubcribe;
  }, []);
  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
