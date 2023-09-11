import React from "react";
import Icon from "react-icons-kit";
import {trash} from 'react-icons-kit/iconic/trash'
export const CartItem = ({ cart, values }) => {
  return (
    <>
      <div className="row" style={{fontFamily:'cursive'}}>
        <div className="col-10 mx-auto col-lg-2">
          <img src={cart.img} style={{ width: "200px", height: "200px" }} />
        </div>
        <div className="col-10 mx-auto col-lg-2 h5">
          <span className="d-lg-none">Product: </span>
          {cart.title}
        </div>
        <div className="col-10 mx-auto col-lg-2 h5">
          <span className="d-lg-none">Price: </span>
          {cart.price}
        </div>
        <div className="col-10 mx-auto col-lg-2  my-2 my-lg-0">
          <div className="d-flex justify-content-center">
            <span className="btn mx-1 btn-light btn-outline-dark" onClick={()=>{values.decrementHandler(cart.id)}}>-</span>
            <span className="btn mx-1 btn-light btn-outline-dark disabled">{cart.count}</span>
            <span className="btn mx-1 btn-light btn-outline-dark" onClick={()=>{values.incrementHandler(cart.id)}}>+</span>
          </div>
        </div>
        <div className="col-10 mx-auto col-lg-2">
        <span style={{ color: "#6c757d" , cursor:'pointer' }} onClick={()=>{values.removeItem(cart.id)}}>
          <Icon size={24} icon={trash} />
        </span>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <strong>Item Total: ${cart.total}</strong>
        </div>
      </div>
    </>
  );
};
