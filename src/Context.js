import React, { useEffect, useState } from "react";
import { storeProducts, detailProduct } from "./data";
const ProductContext = React.createContext();

const ProductProvider = (props) => {
  const [state, setState] = useState({
    storeProducts: [],
    detailProduct: { ...detailProduct },
    cart: [],
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  });

  useEffect(() => {
    setProducts();
  }, []);
  useEffect(()=>{
    addTotals();
  },[state.cart])

  const setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach((element) => {
      const item = { ...element };
      tempProducts = [...tempProducts, item];
    });
    setState((prevState) => {
      return { ...prevState, storeProducts: tempProducts };
    });
  };
  const getItem = (id) => {
    const product = state.storeProducts.find((item) => item.id === id);
    return product;
  };
  const handleOnClickImage = (id) => {
    const product = getItem(id);
    setState((prevState) => {
      return { ...prevState, detailProduct: product };
    });
  };
  const addToCart = (id) => {
    let tempProducts = [...state.storeProducts];
    tempProducts.inCart = true;
    const product = getItem(id);
    product.inCart = true;
    product.count = 1;
    product.total = product.price;
    setState((prevState) => {
      return {
        ...prevState,
        storeProducts: tempProducts,
        cart: [...prevState.cart, product],
      }
    })
  };
  const incrementHandler = (id) => {
    let tempProducts=[...state.storeProducts]
    let tempCart = [...state.cart]
    const index = tempProducts.indexOf(getItem(id));
    let product = tempProducts[index]
    product.count += 1;
    product.total += product.price
    setState((prevState) => {
        console.log(prevState)
      return { ...prevState,storeProducts:[...tempProducts], cart: [...tempCart] };
    });
  };
  const decrementHandler = (id) => {
    let tempProducts=[...state.storeProducts]
    let tempCart = [...state.cart]
    const index = tempProducts.indexOf(getItem(id));
    let product = tempProducts[index]
    if(product.count<=1){
        return removeItem(id)
    }
    product.count -= 1;
    product.total -= product.price
    
    setState((prevState) => {
        console.log(prevState)
      return { ...prevState,storeProducts:[...tempProducts], cart: [...tempCart] };
    });
  };
  const removeItem = (id) => {
    let tempProducts=[...state.storeProducts]
    let tempCart = [...state.cart]
    tempCart = tempCart.filter(item=>item.id!==id)
    const index = tempProducts.indexOf(getItem(id));
    let product = tempProducts[index]
    product.inCart = false;
    product.count = 0;
    product.total = 0
    setState((prevState)=>{
        return {...prevState, cart:[...tempCart], storeProducts:[...tempProducts]}
    })

  };
  const clearCart = () => {
    setState((prevState) => {
      return { ...prevState, cart: [] };
    })
    setProducts();
  }
  const addTotals = () => {
    let subTotal = 0;
    state.cart.map((item) => (subTotal += item.total));
    let tempTax = subTotal * 0.5;
    let total = subTotal + tempTax;
    setState((prevState) => {
      return {
        ...prevState,
        cartSubTotal: subTotal,
        cartTax: tempTax,
        cartTotal: total,
      };
    });
  };
  return (
    <ProductContext.Provider
      value={{
        ...state,
        handleOnClickImage,
        addToCart,
        incrementHandler,
        decrementHandler,
        removeItem,
        clearCart,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
