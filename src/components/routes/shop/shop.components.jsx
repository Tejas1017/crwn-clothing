import { UseContext, useContext,Fragment } from "react";
import { CategoriesContext } from "../../../context/categories.context";
import CategoriesPreview from "../../categories-preview/categories-preview.components";
import "./shop.styles.scss";
const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => {
       const products =categoriesMap[title]
       return <CategoriesPreview key={title} title={title} products={products}/>   
    })}
    </div>
  );
};
export default Shop;
