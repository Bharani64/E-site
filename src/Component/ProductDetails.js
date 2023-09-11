import React from "react";
import { ProductConsumer } from "../Context";
import { Link } from "react-router-dom";

export const ProductDetails = () => {
  return (
    <ProductConsumer>
      {(value) => {
        const { id, company, img, info, price, title, inCart } =
          value.detailProduct;
        return (
          <>
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-primary my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 ">
                  <img
                    class="rounded"
                    style={{
                      borderColor: "purple",
                      borderWidth: "10px",
                      borderStyle: "double",
                    }}
                    src={img}
                  />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2 class="px-4">Model: {title}</h2>
                  <h3
                    class="p-4"
                    style={{ fontFamily: "cursive", color: "purple" }}
                  >
                    Manufactured By: {company}
                  </h3>
                  <p
                    class="p-4"
                    style={{
                      fontFamily: "Bradley Hand, cursive",
                      fontWeight: "400",
                      fontSize: "24px",
                    }}
                  >
                    {info}
                  </p>
                  <p
                    class="px-4"
                    style={{
                      color: "purple",
                      fontFamily: "cursive",
                      fontWeight: "lighter",
                      fontSize: "48px",
                    }}
                  >
                    Price : ${price}
                  </p>
                  <Link to="/">
                  <button class="btn btn-success mx-4">Go Back to Products</button>
                  </Link>
                  {!inCart ? (
                    <button
                      onClick={() => {
                        value.addToCart(id);
                      }}
                      class="btn btn-primary pr-3"
                    >
                      Add to Cart
                    </button>
                  ) : (
                    <button class="btn btn-primary pr-3" disabled>
                      In Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          </>
        );
      }}
    </ProductConsumer>
  );
};
