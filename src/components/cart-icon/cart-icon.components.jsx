import {ReactComponent as Cart} from './../../assests/shopping-bag.svg'
import './cart-icon.styles.scss'
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'

const CartIcon = ()=>{
    const {isCartOpen,setIsCartOpen,cartCount } = useContext(CartContext)
    const isToggleCart = ()=>{
        setIsCartOpen(!isCartOpen)
    }

    return (
        <div className='cart-icon-container' onClick={isToggleCart}>
            <Cart className='shopping-icon'/>
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}
export default CartIcon