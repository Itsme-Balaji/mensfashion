import React, { useContext } from 'react'
import { ProductsContext } from '../Context/context'
import { useParams } from 'react-router-dom';
import ProductView from '../Components/ProductView/ProductView';

const SelectProduct = () => {
    const {allProducts} = useContext(ProductsContext);
    const {productId} =useParams();
    const fetchId = allProducts.find((e)=>e.id===Number(productId))
    console.log("fetch",fetchId);
    
    
  return (
   
    <div >
        <ProductView fetchId={fetchId}/>
    </div>

    
  )
}

export default SelectProduct