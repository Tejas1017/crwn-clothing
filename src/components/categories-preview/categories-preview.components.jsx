import './categories-preview.styles.scss'
import ProductsCard from '../product-card/product-card.components'
const CategoriesPreview = ({title,products})=>{
    return (
        <div className='category-preview-container'>
            <h2>
                <span className='title'>{title}</span>
            </h2>
            <div className='preview'>
                {
                    products.filter((_,idx)=> idx<4).map((product)=>(
                        <ProductsCard key={product.id} product={product}/>
                    ))
                }
            </div>
        </div>
    )

}
export default CategoriesPreview