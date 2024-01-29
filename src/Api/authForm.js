import axios from "axios";

export const authForm = async (username,password) => {
  const url = 'https://fakestoreapi.com/auth/login'
  const request = await axios.post(url, {username, password},  {
    headers:{ 'Content-Type': 'application/json'}
  })

  return request
}


