import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

import headerLogo from '../../assets/images/banner/headerLogo.png'
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <section id='footer' className='min-h-[60vh] overflow-hidden max-w-[100vw] bg-[#3f2a1b] mt-16'>


        <div className='grid sm:grid-cols-2 lg:grid-cols-4 w-[90vw] m-auto gap-x-8 gap-y-4 mt-12'>
            <div className=''>
                <p className='text-center md:text-start md:text-[1.6rem] mt-4 text-bold   cursor-pointer '><img src={headerLogo} alt='' className='h-[4rem] m-auto md:m-0'/></p>
                <p className='text-center md:text-start md:text-[1.1rem] mt-4 text-bold text-[white] hover:text-[red] cursor-pointer '>1245, North Western Street</p>
                <p className='text-center md:text-start md:text-[1.1rem] text-bold text-[white]  hover:text-[red] cursor-pointer '>Europia. Lumbio</p>
                <p className='text-center md:text-start md:text-[1.1rem] mt-4 text-bold text-[white]  hover:text-[red] cursor-pointer '>Monday to Friday from 09:00 to 17:00.</p>
                <p className='text-center md:text-start md:text-[1.1rem] text-bold text-[white]  hover:text-[red] cursor-pointer '>Call IND+91 6384609250</p>
            </div>
            <div className=''>
                <Link to={'/'} onClick={()=>window.scrollTo(0,0)}><p className='text-center md:text-start md:text-[1.6rem] text-[rgb(225_104_11)] text-bold font-[monoton]'>Shop</p></Link>
                <Link to={'/shoe'}><p className='text-center md:text-start md:text-[1.1rem] mt-4 text-bold text-[white]  hover:text-[red] cursor-pointer '>Sneakers</p></Link>
                <Link to={'/shirt'}><p className='text-center md:text-start md:text-[1.1rem] mt-4 text-bold text-[white]  hover:text-[red] cursor-pointer '>Shirts</p></Link>
                <Link to={'/pant'}><p className='text-center md:text-start md:text-[1.1rem] mt-4 text-bold text-[white]  hover:text-[red] cursor-pointer '>Pants</p></Link>
                <Link to={'/watch'}><p className='text-center md:text-start md:text-[1.1rem] mt-4 text-bold text-[white]  hover:text-[red] cursor-pointer '>Watches</p></Link>
                <Link to={'/accessories'}><p className='text-center md:text-start md:text-[1.1rem] mt-4 text-bold text-[white]  hover:text-[red] cursor-pointer '>Accessories</p></Link>

            </div>
            <div className=''>
                <p className='text-center md:text-start md:text-[1.6rem] text-[rgb(225_104_11)] text-bold font-[monoton]'>Customer</p>
                <p className='text-center md:text-start md:text-[1.1rem] mt-4 text-bold text-[white]  hover:text-[red] cursor-pointer '>Contact Us</p>
                <Link to={'/login'}><p className='text-center md:text-start md:text-[1.1rem] mt-4 text-bold text-[white]  hover:text-[red] cursor-pointer '>Sign In</p></Link>
               <Link to={'/login'}> <p className='text-center md:text-start md:text-[1.1rem] mt-4 text-bold text-[white]  hover:text-[red] cursor-pointer '>Create Account</p></Link>
                <p className='text-center md:text-start md:text-[1.1rem] mt-4 text-[white]  hover:text-[red] cursor-pointer '>Shopping</p>
                <p className='text-center md:text-start md:text-[1.1rem] mt-4 text-bold text-[white]  hover:text-[red] cursor-pointer '>Checkout</p>
            </div>
            <div className=''>
                <h1 className='text-[rgb(225_104_11)] text-bold text-[1.6rem] '>Sign up to be the first to know about new collections.</h1>
                <input type='email' placeholder='email' className='mt-4 w-full bg-[black] rounded-[2rem] py-3 px-4 border-2 border-white-400' />
                <ul className='flex gap-5 mt-8 px-4'>
                    <li className='text-[1.5rem] text-[white] hover:text-[rgb(225_104_11)]'><FaXTwitter /></li>
                    <li className='text-[1.5rem] text-[white] hover:text-[rgb(225_104_11)]'><FaFacebook /></li>
                    <li className='text-[1.5rem] text-[white] hover:text-[rgb(225_104_11)]'><BsInstagram /></li>
                      
                </ul>
            </div>
        </div>
        <hr className='mt-20'/>
        <div className='w-[90vw] m-auto mt-6 mb-4'>
            <h1 className='text-[white] tracking-[2px] text-center'>All Right Reserved © 2025 Designthemes</h1>
        </div>
    </section>
  )
}

export default Footer