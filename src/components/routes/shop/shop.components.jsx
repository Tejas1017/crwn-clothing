import { UserContext, useContext } from 'react'
import { ProductsContext } from '../../../context/product.context'
import ProductsCard from '../../product-card/product-card.components'
import './shop.styles.scss'
const Shop = () =>{
    const {products} =useContext(ProductsContext)

    return (
        <div className='container'>
            {products.map((product)=>(
                <ProductsCard key={product.id} product={product} />
            ))}
        </div>
    )
}
export default Shop