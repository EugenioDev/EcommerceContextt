// Lista di tutti i prodotti da inserire nella home page. Richiamando un api esterna
import {useContext, useEffect, useState} from "react";
import {allProducts} from "../Api/allProducts";
import Product from "./Product";
import Loading from "./Loading";
import {StoreContextUser} from "../Contenxt/authContext";

const Products = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    setIsLoading(true)
    const getAllProducts = async () => {
      try {
        const response = await allProducts()
        setProducts(response)
        setIsLoading(false)
      } catch (error) {
        console.log('Qualcosa è andato storto')
        setIsLoading(true)
      }
    }
    getAllProducts()
  }, []);

  return (
   <>

     <h1 className='font-bold text-2xl my-4'>Scopri tutti i prodotti</h1>
     {isLoading && <Loading/>}
     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-5'>
       {products && products.data?.map(product => <Product key={product.id} product={product}/>)}
     </div>
   </>
  )
}
export default Products