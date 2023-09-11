import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Context";
export const Product = ({ Products }) => {
  return (
    <div
      class="card border-info mb-3 col-9 mx-auto col-mg-6 col-lg-3 border-2 p-2 rounded m-2"
      style={{ width: "18rem" }}
    >
      <ProductConsumer>
        {(values) => {
          return (
            <>
              <h6 class="card-title text-uppercase text-center">
                {Products.company}
              </h6>
              <Link to="details">
                <img
                  class="card-img-top"
                  onClick={() => {
                    values.handleOnClickImage(Products.id);
                  }}
                  src={Products.img}
                  alt="Card image cap"
                />
              </Link>

              <div class="card-body">
                <h5 class="card-title">{Products.title}</h5>
                <div class="d-flex justify-content-between align-items-center">
                  <b class="card-text">{`$ ${Products.price} Only/-`}</b>
                  {!Products.inCart ? (
                    <button onClick={()=>{values.addToCart(Products.id)}}class="btn btn-primary pr-3">Add to Cart</button>
                  ) : (
                    <button class="btn btn-primary pr-3" disabled>
                      In Cart
                    </button>
                  )}
                </div>
              </div>
            </>
          );
        }}
      </ProductConsumer>
    </div>
  );
};
