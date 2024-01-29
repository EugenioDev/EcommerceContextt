import axios from "axios";

export const allCategories = async () => {
  const url = 'https://fakestoreapi.com/products/categories'
  const request = await axios.get(url)
  return request;
}