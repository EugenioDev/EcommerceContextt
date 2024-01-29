import axios from "axios";

export const itemsByCategory = async (category) => {
  const url =`https://fakestoreapi.com/products/category/${category}`;
  const response = await  axios.get(url)
  return response
}
