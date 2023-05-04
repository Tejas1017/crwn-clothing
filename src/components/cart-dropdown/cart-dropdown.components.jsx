import './cart-dropdown.styles.scss'
import Button from "../button/button.components"
const CartDropDown = () =>{
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items" />
            <Button>GO checkout</Button>
        </div>
    )
}
export default CartDropDown