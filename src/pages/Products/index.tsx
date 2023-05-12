import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/store";
import ProductsMenu from "../../components/ProductsMenu";
import { fetchCategories } from "../../store/features/categorySlice";
import { fetchProducts } from "../../store/features/productSlice";
import ProductCard from "../../components/ProductCard";
import CategoryChoose from "../../components/CategoryChoose";
import "./index.scss";

function Products() {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.category.categories);
  const products = useAppSelector((state) => state.product.products);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, []);

  const getFilteredProducts = () => {
    const filterProds = products.filter((product) => {
      if (id) {
        return product.category === id;
      } else {
        return true;
      }
    });
    return filterProds;
  };

  return (
    <Box className={"main-container-products"}>
      <Box className={"left-menu-container"}>
        <ProductsMenu categories={categories} />
      </Box>
      <Box className={"category-choose-dropdown-container"}>
        <CategoryChoose />
      </Box>
      <Box className={"right-menu-container"}>
        {products && getFilteredProducts().length ? (
          getFilteredProducts().map(
            ({
              id,
              imageURL,
              description,
              name,
              category,
              price,
              sku,
              stock,
            }) => (
              <React.Fragment key={sku}>
                <ProductCard
                  id={id}
                  imageURL={imageURL}
                  description={description}
                  name={name}
                  category={category}
                  price={price}
                  sku={sku}
                  stock={stock}
                />
              </React.Fragment>
            )
          )
        ) : (
          <Box sx={{ padding: "1em" }}>No Product found</Box>
        )}
      </Box>
    </Box>
  );
}

export default Products;
