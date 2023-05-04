import { createContext,useEffect,useState } from "react";
const addItem = (cartItems,productToAdd)=>{
    const exictingCart =cartItems.find((cartItem)=>(
        cartItem.id ===productToAdd.id
    ))
    if(exictingCart){
        return cartItems.map((cartItem)=>cartItem.id===productToAdd.id?
        {...cartItem,quantity:cartItem.quantity+1}
        :cartItem
        )
    }

    
    return [...cartItems,{...productToAdd,quantity:1}] 

}


export  const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen:()=>{},
    cartItems:[],
    addCartItem:()=>{},
    cartCount:0
})




export const CartProvider = ({children})=>{
    const [cartItems,setCartItem] =useState([])
    const [isCartOpen,setIsCartOpen] = useState(false)
    const [cartCount,setCartCount] = useState(0)
    useEffect(()=>{
        const newCartCount = cartItems.reduce((total,cartItem)=>total+cartItem.quantity,0)
        setCartCount(newCartCount)
    },[cartItems])
    const addItemCart = (productToAdd)=>{
        setCartItem(addItem(cartItems,productToAdd))
    }

    const value ={isCartOpen,setIsCartOpen,addItemCart,cartItems,cartCount}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}