import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../components/contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import {Title, CategoryContainer } from "./category.styles";
import { Fragment } from "react";
const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
