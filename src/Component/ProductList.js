import React from "react";
import { Product } from "./Product";
import { ProductConsumer } from "../Context";
export const ProductList = () => {
  return (
    <>
      <div class="container">
        <div class="row  m-3">
          <ProductConsumer>
            {(value) => {
              return value.storeProducts.map((Products) => {
                return <Product key={Products.id} Products={Products}/>;
              });
            }}
          </ProductConsumer>
        </div>
      </div>
    </>
  );
};
