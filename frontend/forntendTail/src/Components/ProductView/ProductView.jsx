import React, { useContext, useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { BsTagFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { ProductsContext } from '../../Context/context';
import { toast } from 'react-toastify';
const ProductView = ({fetchId}) => {

    const {addToCart} = useContext(ProductsContext);

    const [imgChange, setImgChange] = useState(fetchId.image[0])


  return (
    <section className=' min-h-[100vh] overflow-hidden w-[95vw] m-auto'>
        <div className='h-[1200px] lg:h-[550px] w-[100%]  mt-20 grid lg:grid-cols-2 min-h-[100vh]'>
            <div className=' h-full '>
                <div className='h-full grid md:grid-cols-3 gap-y-4 '>
                    <div className=' flex md:flex-col gap-x-4 md:gap-4 lg:gap-8 justify-center items-center order-2 md:order-1 '>
                        <div className={imgChange===fetchId.image[0]?' h-[45px] w-[45px] sm:h-[60px] sm:w-[60px]  border-2 border-[red]':' h-[45px] w-[45px] sm:h-[60px] sm:w-[60px]'} onClick={()=>setImgChange(fetchId.image[0])}>
                            <img src={fetchId.image[0]} alt='' className='h-full w-full object-cover'/>
                        </div>
                        <div className={imgChange===fetchId.image[1]?' h-[50px] w-[45px] sm:h-[60px] sm:w-[60px]  border-2 border-[red]':'h-[45px] w-[45px] sm:h-[60px] sm:w-[60px]'} onClick={()=>setImgChange(fetchId.image[1])}>
                            <img src={fetchId.image[1]} alt='' className='h-full w-full object-cover'/>
                        </div>
                        <div className={imgChange===fetchId.image[2]?' h-[45px] w-[45px] sm:h-[60px] sm:w-[60px] border-2 border-[red]':' h-[45px] w-[45px] sm:h-[60px] sm:w-[60px]'} onClick={()=>setImgChange(fetchId.image[2])}>
                            <img src={fetchId.image[2]} alt='' className='h-full w-full object-cover'/>
                        </div>
                        <div className={imgChange===fetchId.image[3]?'h-[45px] w-[45px] sm:h-[60px] sm:w-[60px] border-2 border-[red]':' h-[45px] w-[45px] sm:h-[60px] sm:w-[60px]'} onClick={()=>setImgChange(fetchId.image[3])}>
                            <img src={fetchId.image[3]} alt='' className='h-full w-full object-cover'/>
                        </div>
                        <div className={imgChange===fetchId.image[4]?' h-[45px] w-[45px] sm:h-[60px] sm:w-[60px] border-2 border-[red]':' h-[45px] w-[45px] sm:h-[60px] sm:w-[60px]'} onClick={()=>setImgChange(fetchId.image[4])}>
                            <img src={fetchId.image[4]} alt='' className='h-full w-full object-cover'/>
                        </div>

                    </div>
                    <div className='md:col-span-2 flex items-center  order-1 md:order-2 '>
                        <div className=' h-[370px] w-[260px] md:h-[430px] md:w-[290px] md:h-[520px] md:w-[320px] m-auto md:m-0'>
                            <img src={imgChange} alt='' className='h-full w-full object-cover'/>
                        </div>
                    </div>

                </div>
            </div>
            <div className=' h-full  mb-8 min-h-[100vh]' >
                <h1 className='mt-8 lg:mt-16 font-bold text-lg sm:ml-8 lg:ml-0'>{fetchId.productName}</h1>
                <p className='mt-2 text-xl sm:ml-8 lg:ml-0'>{fetchId.description}</p>
                <p className='mt-3 sm:ml-8 lg:ml-0'>{fetchId.ratings===4?<span className='flex text-[green]  '><FaStar/><FaStar/><FaStar/><FaStar/></span>:
                <span className='flex text-[green]'><FaStar /><FaStar/><FaStar/><FaStar/><FaRegStarHalfStroke /></span>}</p>
                <p className='mt-4 text-xl font-bold sm:ml-8 lg:ml-0'><span className='text-[green]'><MdOutlineCurrencyRupee className='inline'/>{fetchId.newPrice}</span> <span className='text-[red] line-through text-base'><MdOutlineCurrencyRupee className='inline'/>{fetchId.oldPrice}</span></p>

                <p className='mt-5 text-lg sm:ml-8 lg:ml-0'>Available offers</p>
                <p className='mt-3 sm:ml-8 lg:ml-0'><BsTagFill className='inline text-[green]'/><span className='font-bold ml-2'>Partner Offer</span> Buy now to avail a scratchcard coupon for your next order!</p>
                <p className='mt-2 sm:ml-8 lg:ml-0'><BsTagFill className='inline text-[green]'/><span className='font-bold ml-2'>Special Price</span> Get extra ₹4100 off (price inclusive of cashback/coupon)</p>
                <p className='mt-2 sm:ml-8 lg:ml-0'><BsTagFill className='inline text-[green]'/><span className='font-bold ml-2'>Combo Offer</span> Buy 2 items save ₹40; Buy 3 or more save ₹80</p>
                <p className='mt-2 sm:ml-8 lg:ml-0'><BsTagFill className='inline text-[green]'/><span className='font-bold ml-2'>Partner Offer</span> Buy now to avail a scratchcard coupon for your next order!</p>
                <p className='mt-2 sm:ml-8 lg:ml-0'><BsTagFill className='inline text-[green]'/><span className='font-bold ml-2'>Bank Offer</span> 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</p>

                <button onClick={()=>{addToCart(fetchId.id);{localStorage.getItem("token")?toast.success("Product added in cart"):toast.error("Please Login")}}} className='bg-[#d45606] px-4 py-2 rounded-[0.5rem] mt-12 text-white hover:bg-[red]'>ADD TO CART</button>
            </div>

        </div>
    </section>
  )
}

export default ProductView