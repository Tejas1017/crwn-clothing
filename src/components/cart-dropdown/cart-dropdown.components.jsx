import {useContext} from'react'
import {CartContext} from './../../context/cart.context'
import './cart-dropdown.styles.scss'
import Button from "../button/button.components"
import CartItem from '../cart-item/cart-item.components'

const CartDropDown = () =>{
    const {cartItems} = useContext(CartContext) 
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items" >

                {cartItems.map((item=>(
                    <CartItem key={item.id} Cartitem={item}/>
                )))}
            </div>  
            <Button>GO checkout</Button>
        </div>
    )
}
export default CartDropDown