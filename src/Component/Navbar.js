import React from "react";
import { Icon } from "react-icons-kit";
import { home } from "react-icons-kit/icomoon/home";
import { shoppingCart } from "react-icons-kit/fa/shoppingCart";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav class="navbar navbar-dark bg-dark d-flex">
      <Link class="navbar-brand mx-4" to="/">
        <span style={{ color: "#E9C46A" }}>
          <Icon size={48} icon={home} />
        </span>
        <p className="h4">Home</p>
      </Link>
      <span className="text-light h3">Ecommerce-Site</span>
      <Link class="navbar-brand" to="/cart">
        <div className="px-4 navbar-brand" style={{ color: "#F4A261" }}>
          <Icon size={48} icon={shoppingCart} />
          <p className="h4">Cart</p>
        </div>
      </Link>
    </nav>
  );
};
