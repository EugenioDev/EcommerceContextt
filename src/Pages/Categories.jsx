import Category from "./Category";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {itemsByCategory} from "../Api/ItemsByCategory";
import Product from "../components/Product";
import Loading from "../components/Loading";

const Categories = () => {
  const {id} = useParams()
  const [singleCategory, setSingleCategory] = useState(id)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const fetchByCategory = async () => {
      try {
        const response = await itemsByCategory(id)
        setSingleCategory(response)
        setIsLoading(false)
      } catch (error) {
        setIsLoading(true)
        console.log(error)
      }
    }
    fetchByCategory(singleCategory)
  }, [id]);
  return (
   <>
     {isLoading && <Loading/>}
     <h1 className='font-bold text-2xl my-4 mx-5'>La Categoria: {id}</h1>
     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-5 mx-5'>
       {singleCategory && singleCategory.data?.map((category, index) => <Product key={index} product={category}/>)}
     </div>
   </>
  )
}
export default Categories