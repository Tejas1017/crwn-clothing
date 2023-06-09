import { useParams } from "react-router-dom";
import { useContext, useState, useEffect, Fragment } from "react";
import { CategoriesContext } from "../../../context/categories.context";
import ProductsCard from "../../product-card/product-card.components";
const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h1 className="class-title">{category.toUpperCase()}</h1>
      <div className="container">
        {products &&
          products.map((product) => (
            <ProductsCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};
export default Category;
