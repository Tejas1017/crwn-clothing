import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as Crownlogo } from "../../../assests/crown.svg";
import "./navigation.styles.scss";
import { UserContext } from "../../../context/user.context";
import{
  signOutUser
} from "../../../utils/firebase/firebase.utils"
const Navigation = () => {
  const { currentUser,setCurrentUser } = useContext(UserContext);
  const signOutUserHnadler =async()=>{
    const res = await signOutUser()
    // console.log(res)
    setCurrentUser(null)
  }
 
  

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Crownlogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUserHnadler} >Sign Out</span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign-in
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
