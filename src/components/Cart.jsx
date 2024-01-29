import {TrashIcon} from "@heroicons/react/24/solid";
import {useContext} from "react";
import {StoreContextUser} from "../Contenxt/authContext";
import Product from "./Product";

const Cart = () => {
  const {products, removeFromCart} = useContext(StoreContextUser)


  return (
   <>
     {products.length ? products.map(product => (
      <div className='absolute top-10  h-auto right-10 bg-gray-300 text-white p-2 w-1/3 rounded-md'>
        <div className="bg-white rounded-md overflow-hidden shadow-md p-3 flex items-center">
          <img className="w-10 object-cover" src={product.image}
               alt="Product Image"/>
          <div className=" flex mx-auto text-black justify-center items-center space-x-5">
            <div className=''>
              <p className='font-bold'>{product.title}</p>
              <p className='text-sm'>{product.price}$</p>
            </div>
            <div className="">
              <label className="text-gray-600 mr-2">Quantià:</label>
              <input type="number" className="border rounded-md px-2 py-1 w-16 text-center" value="1"/>
            </div>
            <TrashIcon className="w-5 h-5"/>
          </div>
        </div>
      </div>
     )) : (
      <div className='absolute top-10 right-10 bg-gray-300 text-white p-2 w-1/3 rounded-md'>
        <div className="bg-white text-black rounded-md overflow-hidden shadow-md p-3">
          <p className='text-2xl font-bold text-center'>Il Carrello è vuoto.</p>
        </div>
      </div>
     )}
   </>
  )
}
export default Cart