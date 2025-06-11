import React, { useContext, useState } from 'react'
import Banner from '../Components/Banner/Banner'

import causalShirt from "../assets/images/banner/causalShirt.jpg"
import formalShirt from "../assets/images/banner/formalShirt.jpg"

import printedShirt from "../assets/images/banner/printedShirt.jpg"
import Products from '../Components/Products/Products'


import ProductType from '../Components/ProductType/ProductType'
import { ProductsContext } from '../Context/context'

import shirtBanner from '../assets/images/banner/shirtBanner.jpg'

import printedShirtBanner from '../assets/images/banner/printedShirtBanner.png'

const Shirt = () => {
    const [active, setActive] = useState("all")
    const {allProducts} = useContext(ProductsContext);


  return (
    <section className='overflow-hidden min-h-[100vh]'>
        <Banner banner={printedShirtBanner}/>
        <ProductType productType={{type1:causalShirt,productName1:"Causal Shirts",productName2:"Formal Shirts",productName3:"Printed Shirts",type2:formalShirt,type3:printedShirt,active,setActive}}/>

        <div className=''>
            <Products productType={{productName1:"Causal Shirts",productName2:"Formal Shirts",productName3:"Printed Shirts",active,setActive,allProducts,category:"shirt"}}/>
        </div>
    </section>
  )
}

export default Shirt
