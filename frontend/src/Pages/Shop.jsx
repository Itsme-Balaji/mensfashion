import React, { useContext } from 'react'
import Banner from '../Components/Banner/Banner'
import DisplayProducts from '../Components/DisplayProducts/DisplayProducts'
import { ProductsContext } from '../Context/context'
import homeBanner from '../assets/images/banner/homeBanner2.jpg'

const Shop = () => {
  const {allProducts} = useContext(ProductsContext);
  const shirtProducts = allProducts.filter((item)=>item.display==="yes" && item.category==="shirt");
  const watchProducts = allProducts.filter((item)=>item.display==="yes" && item.category==="watch");
  const pantProducts = allProducts.filter((item)=>item.display==="yes" && item.category==="pant");
  const shoeProducts = allProducts.filter((item)=>item.display==="yes" && item.category==="shoe");
  const perfumeProducts = allProducts.filter((item)=>item.display==="yes" && item.category==="perfume");
  const tShirtProducts = allProducts.filter((item)=>item.display==="yes" && item.category==="tshirt");
  const accessoriesProducts = allProducts.filter((item)=>item.display==="yes" && item.category==="accessories");






  return (
    <div>
        <Banner banner={homeBanner}/>

        {/* shirt section */}

        <h1 className='text-center text-lg md:text-3xl font-bold mt-16 text-[#d85707]'>SHIRTS COLLECTIONS</h1>
        <hr className='border-b-4 mt-4 border-[#3f2a1b] w-[90vw] m-auto'/>
        <DisplayProducts allProducts={shirtProducts}/>

        {/* Watch section */}

        <h1 className='text-center text-lg md:text-3xl font-bold mt-16 text-[#d85707]'>WATCH COLLECTIONS</h1>
        <hr className='border-b-4 mt-4 border-[#3f2a1b] w-[90vw] m-auto'/>
        <DisplayProducts allProducts={watchProducts}/>

        {/* Pants section */}

        <h1 className='text-center text-lg md:text-3xl font-bold mt-16 text-[#d85707]'>PANTS COLLECTIONS</h1>
        <hr className='border-b-4 mt-4 border-[#3f2a1b] w-[90vw] m-auto'/>
        <DisplayProducts allProducts={pantProducts}/>

        {/* Shoes section */}

        <h1 className='text-center text-lg md:text-3xl font-bold mt-16 text-[#d85707]'>SHOES COLLECTIONS</h1>
        <hr className='border-b-4 mt-4 border-[#3f2a1b] w-[90vw] m-auto'/>
        <DisplayProducts allProducts={shoeProducts}/>


        {/* t-shirts section */}

        <h1 className='text-center text-lg md:text-3xl font-bold mt-16 text-[#d85707]'>T-SHIRTS COLLECTIONS</h1>
        <hr className='border-b-4 mt-4 border-[#3f2a1b] w-[90vw] m-auto'/>
        <DisplayProducts allProducts={tShirtProducts}/>


    </div>
  )
}

export default Shop