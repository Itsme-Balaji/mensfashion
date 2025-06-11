import { useContext, useState } from 'react'
import Banner from '../Components/Banner/Banner'
import sportShoe from '../assets/images/shoes/sport/puma_45.webp'
import causalShoe from '../assets/images/shoes/causal/redTape_31.webp'
import formalShoe from '../assets/images/shoes/formal/kosherBrown_31.webp'

import ProductType from '../Components/ProductType/ProductType'
import { ProductsContext } from '../Context/context'
import shoeBanner from '../assets/images/banner/shoeBanner.png'
import Products from '../Components/Products/Products'


const Shoe = () => {
    const [active, setActive] = useState("all")
    const {allProducts} = useContext(ProductsContext);

  return (
   <section className='overflow-hidden min-h-[100vh]'>
        <Banner banner={shoeBanner}/>
        <ProductType productType={{type1:formalShoe,productName1:"Formal",productName2:"Causal",productName3:"Sport",type2:causalShoe,type3:sportShoe,active,setActive}}/>

        <div className=''>
            <Products productType={{productName1:"Formal",productName2:"Causal",productName3:"Sport",active,setActive,allProducts,category:"shoe"}}/>
        </div>
    </section>
  )
}

export default Shoe
