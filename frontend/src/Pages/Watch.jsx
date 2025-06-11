import { useContext, useState } from 'react'
import Banner from '../Components/Banner/Banner'
import analogWatch from '../assets/images/watches/analog/titan_81.webp'
import digitalWatch from '../assets/images/watches/digital/hala_51.webp'
import smartWatch from '../assets/images/watches/smartWatches/fireboltReactangle_41.webp'
import ProductType from '../Components/ProductType/ProductType'
import { ProductsContext } from '../Context/context'
import digitalWatchBanner from '../assets/images/banner/digitalWatchBanner.png'
import Products from '../Components/Products/Products'


const Shirt = () => {
    const [active, setActive] = useState("all")
    const {allProducts} = useContext(ProductsContext);

  return (
   <section className='overflow-hidden min-h-[100vh]'>
        <Banner banner={digitalWatchBanner}/>
        <ProductType productType={{type1:analogWatch,productName1:"Analog Watches",productName2:"Digital Watch",productName3:"Smart Watch",type2:digitalWatch,type3:smartWatch,active,setActive}}/>

        <div className=''>
            <Products productType={{productName1:"Analog Watches",productName2:"Digital Watch",productName3:"Smart Watch",active,setActive,allProducts,category:"watch"}}/>
        </div>
    </section>
  )
}

export default Shirt
