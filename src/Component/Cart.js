import React from "react";
import { ProductConsumer } from "../Context";
import { CartItem } from "./CartItem";
import { CartTotals } from "./CartTotals";
import { Link } from "react-router-dom";

export const Cart = () => {
  return (
    <ProductConsumer>
      {(values) => {
        return !values.cart.length > 0 ? (
          <div
            style={{
              fontFamily: "cursive",
              fontSize: "48px",
              fontWeight: "bolder",
              color: "grey",
              textAlign: "center",
            }}
          >
            <p className="mt-4">No Items in the Cart</p>
            <Link to="/">
              <button class="btn btn-success mx-4">Go Back to Products</button>
            </Link>
          </div>
        ) : (
          <div className="container-fluid">
            <div className="container-fluid text-center d-none d-lg-block pt-2">
              <div className="row">
                <div className="col-10 mx-auto col-lg-2">
                  <p className="text-uppercase h5">products</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                  <p className="text-uppercase h5">Name of the Product</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                  <p className="text-uppercase h5">Price</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                  <p className="text-uppercase h5">Quantity</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                  <p className="text-uppercase h5">Remove</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                  <p className="text-uppercase h5">Total</p>
                </div>
              </div>
            </div>
            {values.cart.map((item) => {
              return (
                <div className="container-fluid text-center pt-2">
                  <CartItem key={item.key} cart={item} values={values} />
                </div>
              );
            })}
            <CartTotals values={values} />
          </div>
        );
      }}
    </ProductConsumer>
  );
};
