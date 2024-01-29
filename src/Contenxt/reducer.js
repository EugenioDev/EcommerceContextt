export const initialState = {
  token: null,
  //Array di prodotti
  products: [],
  open: false,
  cart: []
}
const userLoginReducer = (state, action) => {
  switch (action.type) {
    case 'token':
      return {
        ...state,
        token: action.payload // lo stato diventa ciò che passiamo.
        // In questo caso diventano le nostre credenziali.
      }
    case 'setProducts':
      return {...state, products: action.payload}
    case 'openModal':
      return {
        ...state,
        open: action.payload
      }
    case 'addToCartProduct':
      return {
        ...state,
        cart: action.payload
      }
    case 'removeFromCartProduct':
      return {
        ...state,
        cart: action.payload
      }

    default:
      return state
  }
}
export default userLoginReducer;