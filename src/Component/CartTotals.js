import React from "react";
import { Link } from "react-router-dom";

export const CartTotals = ({ values }) => {
  return (
    <div className="container">
      <div className="row">
        <div style={{textAlign:"right", fontFamily:"serif"}} className="col-10  col-sm-8  col-md-12 mt-2 ml-sm-5 ml-md-auto  text-capitalize text-right">
          <Link to="/">
            <button
            style={{width:'250px',height:'50px'}}
              className="btn btn-outline-danger mb-3 px-4 text-uppercase"
              onClick={() => {
                values.clearCart();
              }}
            >
              clear cart
            </button>
          </Link>

          <h5>
            <span className="text-title">subtotal: </span>
            <strong>$ {values.cartSubTotal}</strong>
          </h5>
          <h5>
            <span className="text-title">Tax: </span>
            <strong>$ {values.cartTax}</strong>
          </h5>
          <h5>
            <span className="text-title">total: </span>
            <strong>$ {values.cartTotal}</strong>
          </h5>
        </div>
      </div>
    </div>
  );
};
