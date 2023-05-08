import { createContext, useEffect, useState } from "react";
// import { useState } from "react";
import SHOP_DATA from '../mock_Data/shop-data.js'
import { getCategoriesAndDoc } from "../utils/firebase/firebase.utils.jsx";
export const CategoriesContext =createContext({
    categoriesMap:{},
});
export const CategoriesProvider =({children})=>{
    const [categoriesMap,setCategoriesMap] =useState({})
    useEffect (()=>{
        const getCategories =async()=>{
            const categoryMap = await getCategoriesAndDoc()
            console.log(categoryMap)
            setCategoriesMap(categoryMap)
        }
        getCategories()

    },[])
    const value = {categoriesMap}
    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}
