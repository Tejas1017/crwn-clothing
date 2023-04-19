import './category-items.style.scss'

const CategoryItem = ({category}) =>{
    const {imageUrl,title} =category
 return (
    <div  className='category-contanier'>
   
    <div className='background-image' style={{
     backgroundImage:`url(${imageUrl})` 
    }}/>
     <div className='category-body-container'>
       <h2>{title}</h2>
       <p>Shop now</p>
       
     </div>

   </div>
 )
}
export default CategoryItem