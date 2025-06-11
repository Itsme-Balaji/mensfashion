import React, { useContext } from 'react'
import { ProductsContext } from '../../Context/context'
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { toast } from 'react-toastify';
import { BsEmojiFrown } from "react-icons/bs";



const CartItems = () => {
    const {cartItems,allProducts,removeFromCart,totalCartAmount,cartTotal} = useContext(ProductsContext);
    console.log("CCCCC",totalCartAmount());console.log('cartTotal',cartTotal());
    
    
  return (
   
    <section className=' min-h-[100vh] overflow-hidden'>
    {cartTotal() ?
      <div className=' grid lg:grid-cols-3 w-[100%] md:w-[90%] m-auto'>

        
        <div className=' w-[100%] m-auto mt-20   lg:col-span-2'>

            {allProducts.map((item,index)=>{
                if (cartItems[item.id]>0) {
                    return (
                    <>
                        <div className=' h-[200px] col-span-2 mt-8 mb-8'>
                            <div className='grid grid-cols-3 '>
                                <div className=' '>
                                    <div className=' mt-4 h-[120px] w-[90%] sm:h-[120px] sm:w-[70%] md:h-[120px] md:w-[50%] lg:h-[10vw] lg:w-[50%] m-auto'>
                                        <img src={item.image[0]} alt='' className='h-full w-full object-cover' />
                                    </div>
                                    <div className='  text-center mt-3'><button className='text-white bg-[grey] px-3 py-1'>{cartItems[item.id]}</button></div>
                                </div>
                                <div className=' col-span-2 py-2'>
                                    <h1 className='font-bold mt-2'>{item.productName}</h1>
                                    <p className='mt-1 block md:hidden'>{item.description.slice(0,40)}</p>
                                    <p className='mt-1 hidden md:block'>{item.description}</p>
                                    <p className='text-[green] mt-2'>{item.rating===4?<><FaStar className='inline'/><FaStar className='inline'/><FaStar className='inline'/><FaStar className='inline'/></>:<><FaStar className='inline'/><FaStar className='inline'/><FaStar className='inline'/><FaStar className='inline'/><FaRegStarHalfStroke className='inline'/></>}</p>
                                    <p className='mt-3'><span className='text-[green] font-bold'><MdOutlineCurrencyRupee className='inline' />{item.newPrice} </span> <span className='text-[red] line-through font-bold'><MdOutlineCurrencyRupee className='inline' />{item.oldPrice}</span></p>
                                    <button onClick={()=>{removeFromCart(item.id);toast.success("Product Removed")}} className='bg-[#d45606] px-6 py-2 rounded-[0.2rem] mt-3 text-white'>Remove</button>
                                    

                                </div>

                            </div>
                        </div>
                        
                </>
                    )
                }
            })}
            
                


        </div>
        <div className=' md:h-[350px] lg:h-[400px] mt-8 lg:mt-24 w-[100%] lg:w-[100%] p-8 flex flex-col'>
            <h1 className='font-bold text-lg'>Price Details </h1>
            <p className='mt-4 text-lg'>Price --------- <span className='text-[green]'><MdOutlineCurrencyRupee className='inline'/>{totalCartAmount()}</span></p>
            <p className='mt-3 text-lg '>Discount ----- <span className='text-[red]'><MdOutlineCurrencyRupee className='inline'/>-30</span></p>
            <p className='mt-3 text-lg'>Delivery ------- <span className='text-[green]'>Free</span></p>
            <hr className='mt-8'/>
            <h1 className='font-bold text-lg mt-4'>Total Amount------- <span className='text-[green]'><MdOutlineCurrencyRupee className='inline'/>{totalCartAmount()-30}</span></h1>

        </div>
       </div> :<div className='flex justify-center items-center min-h-[100vh]  bg-[black]'><BsEmojiFrown className='text-[#d45606] fixed text-6xl'/> <h1 className='text-[red] fixed mt-28'>Cart is Empty</h1></div> }
    </section> 
  )
}

export default CartItems