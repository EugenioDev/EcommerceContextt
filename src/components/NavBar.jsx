import Logo from '../Assets/logo.png'
import {PhoneIcon, UserIcon} from '@heroicons/react/24/outline'
import {ShoppingBagIcon} from "@heroicons/react/24/outline";
import {HeartIcon} from "@heroicons/react/24/outline";
import SubMenu from "./SubMenu";
import {Link} from "react-router-dom";
import {allProducts} from "../Api/allProducts";
import SearchProducts from "./SearchProducts";
import {useContext, useEffect, useState} from "react";
import Product from "./Product";
import {StoreContextUser} from "../Contenxt/authContext";
import Cart from "./Cart";


const NavBar = () => {
  const [filter, setFilter] = useState('');
  const [filtered, setFiltered] = useState([]);
  const {open, isModalOpen} = useContext(StoreContextUser)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data: allProd} = await allProducts();
        if (allProd) {
          const _filter = filter.toLowerCase().trim();
          let newFiltered = [...allProd];

          if (_filter.length > 0) {
            newFiltered = newFiltered.filter(el => `${el?.title}`.toLowerCase().indexOf(_filter) > -1);
          }
          setFiltered(newFiltered);
        }
      } catch (error) {
        console.error("Errore durante il recupero dei prodotti:", error);
      }
    };

    fetchData();
  }, [filter]);

  return (
   <>
     <div className='flex items-center'>
       <div className='flex flex-1'>
         <Link to='/'>
           <img className='w-12 h-auto mr-auto' src={Logo} alt="Logo e commerce"/>
         </Link>
       </div>

       <div className='flex items-center'>
         <SearchProducts
          filter={filter}
          setFilter={setFilter}
          filtered={filtered}
         />
         <div className='flex items-center space-x-4'>
           <UserIcon className='w-5 h-5 hover:cursor-pointer'/>
           <ShoppingBagIcon onClick={isModalOpen} className='w-5 h-5 hover:cursor-pointer relative'/>
           <HeartIcon className='w-5 h-5 hover:cursor-pointer'/>
           <PhoneIcon className='w-5 h-5 hover:cursor-pointer'/>
         </div>
       </div>
     </div>
     <SubMenu/>

     {filter.length > 0 && (
      <>
        <p className='px-2'>Hai cercato per: {filter}</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-2'>
          {filtered && filtered.map(prod => <Product key={prod.id} product={prod}/>)}
        </div>
      </>
     )}
     {open && <Cart/>}
   </>
  )
}

export default NavBar