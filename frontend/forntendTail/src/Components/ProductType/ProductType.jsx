import React from 'react'

const ProductType = ({productType}) => {
    console.log("productType",productType);
        
    
    
  return (
    <div className='mt-8 lg:mt-20 flex justify-center gap-10 sm:gap-20 lg:gap-40'>
            <div onClick={()=>productType.setActive(productType.productName1)}>
                <div className={productType.active===productType.productName1?' h-[70px] w-[70px] sm:h-[110px] sm:w-[110px] lg:h-[150px] lg:w-[150px] rounded-full border-2 md:border-4 border-[#d45606]':' h-[70px] w-[70px] sm:h-[110px] sm:w-[110px] lg:h-[150px] lg:w-[150px] rounded-full '}>
                    <img src={productType.type1} alt='' className='h-[100%] w-[100%] rounded-full object-cover'/>
                </div>
                <p className='text-center font-bold mt-1 text-[0.6rem] sm:text-base'>{productType.productName1}</p>
            </div>
            <div  onClick={()=>productType.setActive(productType.productName2)}>
                <div className={productType.active===productType.productName2?' h-[70px] w-[70px] sm:h-[110px] sm:w-[110px] lg:h-[150px] lg:w-[150px] rounded-full border-2 md:border-4 border-[#d45606]':' h-[70px] w-[70px] sm:h-[110px] sm:w-[110px] lg:h-[150px] lg:w-[150px] rounded-full'}>
                    <img src={productType.type2} alt='' className='h-[100%] w-[100%] rounded-full object-cover'/>
                </div>
                <p className='text-center font-bold mt-1 text-[0.6rem] sm:text-base'>{productType.productName2}</p>
            </div>
            
            <div  onClick={()=>productType.setActive(productType.productName3)}>
                <div className={productType.active===productType.productName3?' h-[70px] w-[70px] sm:h-[110px] sm:w-[110px] lg:h-[150px] lg:w-[150px] rounded-full border-2 md:border-4 border-[#d45606]':' h-[70px] w-[70px] sm:h-[110px] sm:w-[110px] lg:h-[150px] lg:w-[150px] rounded-full'}>
                    <img src={productType.type3} alt='' className='h-[100%] w-[100%] rounded-full object-cover'/>
                </div>
                <p className='text-center font-bold mt-1 text-[0.6rem] sm:text-base'>{productType.productName3}</p>
            </div>
            
        </div>
  )
}

export default ProductType