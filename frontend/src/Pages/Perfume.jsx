import React, { useContext, useState } from 'react'
import { ProductsContext } from '../Context/context';
import perfumeBanner from '../assets/images/banner/perfumeBanner.png'
import Products from '../Components/Products/Products';
import Banner from '../Components/Banner/Banner';


const Perfume = () => {

    const [active, setActive] = useState("all")
    const {allProducts} = useContext(ProductsContext);

  return (
    <section className='overflow-hidden min-h-[100vh]'>
        <Banner banner={perfumeBanner}/>

        <div className=''>
            <Products productType={{active,setActive,allProducts,category:"perfume"}}/>
        </div>
    </section>
  )
}

export default Perfume