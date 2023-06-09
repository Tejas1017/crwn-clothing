import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as Crownlogo } from "../../../assests/crown.svg";
import "./navigation.styles.scss";
import CartIcon from "../../cart-icon/cart-icon.components"
import CartDropDown from "../../cart-dropdown/cart-dropdown.components";
import { UserContext } from "../../../context/user.context";
import { CartContext } from "../../../context/cart.context";
import{
  signOutUser
} from "../../../utils/firebase/firebase.utils"
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext)
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
            <span className="nav-link" onClick={signOutUser} >Sign Out</span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
          <CartIcon/>
        </div>
        { isCartOpen && <CartDropDown/>}
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
