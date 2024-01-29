import {useEffect, useState} from "react";
import {allCategories} from "../Api/allCategories";
import Category from "./Category";

const SubMenu = () => {
  const [categories, setCategories] = useState()
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await allCategories()
        setCategories(categories)
      } catch (error) {
        console.log(error)
      }
    }
    fetchCategories()
  }, []);
  return (
   <div className='text-center cursor-pointer space-x-2 text-xs'>
     {categories && categories.data?.map((category, index) => <Category key={index} category={category}/>)}
   </div>
  )
}
export default SubMenu;