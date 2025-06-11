import React, { useContext} from 'react'
import { ProductsContext } from '../../Context/context';

import { Link } from 'react-router-dom';


const Products = ({productType}) => {
    const {setActive} = useContext(ProductsContext);

  return (
    <section className=''>

        <div className='w-[95vw] mt-8 m-auto'>
         <div className=' grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 m-auto mt-20 gap-4'>
                {productType.allProducts.filter(item => item.category === productType.category && (item.type === productType.active  || productType.active==="all")).map((item,index)=>(  
                    <div key={index}>
                                          
                        <div className=' bg-[#3f2a1b] h-[437px] w-[100%] rounded-[1rem] overflow-hidden mb-12'>
                            <div className=' h-[280px] w-[200px] m-auto mt-4' data-aos="fade-up">
                                <img src={item.image[0]} alt='' className='h-[100%] w-[100%] object-cover' />
                            </div>
                            <h1 className='text-center mt-3 font-bold text-white'>{item.productName}</h1>
                            <p className='text-center text-white'>{item.description.slice(0,20)+"..."}</p>
                            <p className='text-center mt-2'><span className='text-[green] font-bold'>${item.newPrice}</span><span className='text-[red] line-through ml-4'>${item.oldPrice}</span></p>
                            <Link to={`/selectProduct/${item.id}`} onClick={()=>setActive(`${item.category}`)}> <button className='bg-[#da5807] w-full py-2  mt-2 text-white hover:bg-[red]'>Buy Now</button></Link>
                        </div>
                        
                    </div>

                   
                        
                ))}
            </div>
        </div>
    </section>
  )
}

export default Products