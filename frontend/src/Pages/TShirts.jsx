import React, { useContext, useState } from 'react'
import { ProductsContext } from '../Context/context';
import tShirtBanner from '../assets/images/banner/tShirtBanner.png'
import roundtShirt from '../assets/images/tShirts/rounded/round_31.webp'
import poloShirt from '../assets/images/tShirts/polo/polo_11.webp'
import dropshouldertShirt from '../assets/images/tShirts/dropShoulder/drop_05.webp'
import ProductType from '../Components/ProductType/ProductType';
import Products from '../Components/Products/Products';
import Banner from '../Components/Banner/Banner';


const TShirts = () => {

    const [active, setActive] = useState("all")
    const {allProducts} = useContext(ProductsContext);

  return (
    <section className='overflow-hidden min-h-[100vh]'>
        <Banner banner={tShirtBanner}/>
        <ProductType productType={{type1:roundtShirt,productName1:"Rounded Neck",productName2:"Polo",productName3:"Drop shoulder",type2:poloShirt,type3:dropshouldertShirt,active,setActive}}/>

        <div className=''>
            <Products productType={{productName1:"Rounded Neck",productName2:"Polo",productName3:"Drop shoulder",active,setActive,allProducts,category:"tshirt"}}/>
        </div>
    </section>
  )
}

export default TShirts