import axios from "axios";

export const allProducts = async () => {
  const url = 'https://fakestoreapi.com/products'
  const req = await axios.get(url)
  return req
}