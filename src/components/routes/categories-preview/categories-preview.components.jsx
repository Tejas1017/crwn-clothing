import {  useContext,Fragment } from "react";
import { CategoriesContext } from "../../../context/categories.context";
 import CategoriesPreview from "../../categories-preview/categories-preview.components";
const CategorPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
       const products =categoriesMap[title]
       return <CategoriesPreview key={title} title={title} products={products}/>   
    })}
    </Fragment>
  );
};
export default  CategorPreview 
