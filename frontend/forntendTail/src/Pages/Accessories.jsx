import React, { useContext, useState } from 'react'
import { ProductsContext } from '../Context/context';
import accessoriesBanner from '../assets/images/banner/accessoriesBanner.png'
import Products from '../Components/Products/Products';
import Banner from '../Components/Banner/Banner';


const Accessories = () => {

    const [active, setActive] = useState("all")
    const {allProducts} = useContext(ProductsContext);

  return (
    <section className='overflow-hidden min-h-[100vh]'>
        <Banner banner={accessoriesBanner}/>

        <div className=''>
            <Products productType={{active,setActive,allProducts,category:"accessories"}}/>
        </div>
    </section>
  )
}

export default Accessories