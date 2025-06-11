import { useContext, useState } from 'react'

import Banner from '../Components/Banner/Banner'
import jeanPant from '../assets/images/pants/jeans/brexx_01.webp'
import formalPant from '../assets/images/pants/formalPants/arrow_91.webp'
import jokkers from '../assets/images/pants/trousers/hybk_51.webp'


import ProductType from '../Components/ProductType/ProductType'
import { ProductsContext } from '../Context/context'


import pantBanner from '../assets/images/banner/pantBanner.png'
import Products from '../Components/Products/Products'


const Pant = () => {
    const [active, setActive] = useState("all")
    const {allProducts} = useContext(ProductsContext);


  return (
   <section className='overflow-hidden min-h-[100vh]'>
        <Banner banner={pantBanner}/>
        <ProductType productType={{type1:formalPant,productName1:"Formal Pants",productName2:"Joggers",productName3:"Jeans",type2:jokkers,type3:jeanPant,active,setActive}}/>

        <div className=''>
            <Products productType={{productName1:"Formal Pants",productName2:"Joggers",productName3:"Jeans",active,setActive,allProducts,category:"pant"}}/>
        </div>
    </section>
  )
}

export default Pant
