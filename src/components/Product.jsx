import {useContext} from "react";
import {StoreContextUser} from "../Contenxt/authContext";

const Product = ({product}) => {
  const {addToCartProd} = useContext(StoreContextUser);
  const truncatedTitle = product.title.length > 10 ? product.title.substring(0, 10) + '...' : product.title;
  const addToCart = () => {
    console.log('aggiunto al carrello', product.id)
    addToCartProd(product)
  }
  return (
   <>
     <div className="max-w-full mx-auto bg-white rounded-xl overflow-hidden shadow-md">
       <img className="w-48 h-40 object-contain" src={product.image} alt={product.title}/>
       <div className="p-2">
         <h2 className="font-bold text-xl mb-2">{truncatedTitle}</h2>
         <p className="text-gray-700 text-base mb-4 line-clamp-3">{product.description}</p>
         <div className="flex items-center justify-between">
           <p className="text-xl font-bold text-indigo-500">${product.price}</p>
           <div className="flex items-center py-2">
             <span className="text-indigo-500">{product.rating.rate}</span>
           </div>
         </div>
         <button
          onClick={addToCart}
          className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-700 w-full focus:outline-none focus:shadow-outline-indigo active:bg-indigo-800"
         >
           Aggiungi al carrello
         </button>
       </div>
     </div>

   </>
  );
}
export default Product