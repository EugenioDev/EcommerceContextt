import {createContext, useReducer} from "react";
import reducer, {initialState} from "./reducer";
import {allProducts} from "../Api/allProducts";


export const StoreContextUser = createContext()
export const StoreContextUserProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const userToken = (token) => {
    dispatch({
      type: 'token',
      payload: token
    })
  };

  const isModalOpen = () => {
    dispatch({
      type: 'openModal',
      payload: !state.open
    });
  }


  const fetchProducts = async () => {
    try {
      // Effettua la chiamata API per ottenere i prodotti
      const response = await allProducts(); // Assumi che getProducts sia una funzione reale per effettuare la chiamata API
      const products = response.data; // Assumi che la risposta contenga i dati dei prodotti
      console.log(products)
      // Dispatccha l'azione per popolare l'array nel reducer
      if (products) {
        dispatch({type: 'setProducts', payload: products});
      }
      console.log(products)
    } catch (error) {
      console.error('Errore nel recupero dei prodotti:', error);
    }
  };

  const addToCartProd = (product) => {
    const updateCart = state.products
    const isProductInCart = updateCart.find(el => el.id === product.id)
    if (!isProductInCart) {
      updateCart.push(product)
      dispatch({
        type: "addToCartProduct",
        payload: updateCart,
      });
    } else {
      console.log('il prodotto è già presente nel carrello')
    }
  }
  const removeFromCart = (product) => {
    const updateCart = state.products.filter(
     (currentProduct) => currentProduct.id !== product.id
    );
    dispatch({
      type: "removeFromCartProduct",
      payload: updateCart,
    });
  };


  const value = {
    token: state.token,
    products: state.products,
    open: state.open,
    userToken,
    isModalOpen,
    addToCartProd,
    removeFromCart,
    fetchProducts,

  }
  return (
   <StoreContextUser.Provider value={value}>
     {children}
   </StoreContextUser.Provider>
  )
}