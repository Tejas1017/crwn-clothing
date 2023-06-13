import './directory-items.style.scss'

const DirectoryItem = ({category}) =>{
    const {imageUrl,title} =category
 return (
    <div  className='directory-item'>
   
    <div className='background-image' style={{
     backgroundImage:`url(${imageUrl})` 
    }}/>
     <div className='body'>
       <h2>{title}</h2>
       <p>Shop now</p>
       
     </div>

   </div>
 )
}
export default DirectoryItem