import {useContext} from'react'
import {CartContext} from './../../context/cart.context'
import './cart-dropdown.styles.scss'
import Button from "../button/button.components"
import CartItem from '../cart-item/cart-item.components'
import CheckOut from '../routes/check-out/check-out.components'
import { useNavigate } from 'react-router-dom'


const CartDropDown = () =>{
    const navigation = useNavigate()
    const goToCheckOut = () =>{
        navigation('/checkout')
    }
    const {cartItems} = useContext(CartContext) 
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items" >

                {cartItems.map((item=>(
                    <CartItem key={item.id} Cartitem={item}/>
                )))}
            </div>  
            <Button onClick={goToCheckOut}>GO checkout</Button>
        </div>
    )
}
export default CartDropDown