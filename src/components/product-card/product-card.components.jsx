import { useContext } from "react"
import { CartContext } from "../../context/cart.context"
import "./product-card.styles.scss"

import Button from "../button/button.components"
const ProductsCard = ({product}) =>{
    const {addItemCart} =useContext(CartContext)
    const productToCart = ()=>{
        addItemCart(product)
    }
    const {name,price,imageUrl} = product
    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType='inverted' onClick={productToCart}>Add to cart</Button>
        </div>
    )
}
export default ProductsCard