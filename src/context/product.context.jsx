import { createContext, useState } from "react";
// import { useState } from "react";
import PRODUCT from './../mock_Data/shop-data.json'

export const ProductsContext =createContext({
    products:[],
});

export const ProductProvider =({children})=>{

    const [products,setProduct] =useState(PRODUCT)
    const value = {products}
    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}
