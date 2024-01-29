import {useState} from "react";
import Product from "./Product";

const SearchProducts = ({filter, setFilter}) => {

  return (
   <>
     {<form className='border-b p-2 mr-2'>
       <input
        type="text"
        value={filter}
        onChange={e => setFilter(e.target.value)}
        placeholder='Cerca prodotti o articoli' className='outline-none'/>
     </form>}
   </>
  )
}
export default SearchProducts