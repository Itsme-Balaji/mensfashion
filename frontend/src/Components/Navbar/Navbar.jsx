import React, { useContext,useState } from 'react'
import { ProductsContext } from '../../Context/context'
import logo from '../../assets/images/banner/headerLogo.png'
import { RiMenuUnfold2Line } from "react-icons/ri";
import { RiMenuFold2Line } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
const Navbar = () => {

    const [menu, setMenu] = useState(false);
    const [productItems, setProductItems] = useState(false);
    const [displayType, setDisplayType] = useState(false);
    const {cartTotal,active,setActive} = useContext(ProductsContext)
    const token = localStorage.getItem("token")

  return (
   <header className='bg-[#3f2a1b] sticky top-0 z-40'>
    <nav>
        <div className='w-[100vw] lg:w-[90vw] m-auto flex'>
            <div className='md:mt-3 h-16 w-40'>
               <Link to={'/'}> <img src={logo} alt='logo' className='h-full w-full object-cover ' /></Link>
            </div>
            <div className='flex  gap-4 m-auto p-4 hidden md:block'>
                <ul className='flex gap-20'>
                    <Link to={'/'} onClick={()=>{setActive("shop");window.scrollTo(0,0)}} className={active==="shop"?'py-2 font-bold text-white border-b-4 border-[#d45606]':'py-2 font-bold text-white '}>Shop</Link>
                    <li onClick={()=>setProductItems((prev)=>!prev)}  className=' py-2 group cursor-pointer flex justify-center items-center font-bold text-white'>Products category {productItems?<IoIosArrowUp className='inline mt-2 ml-1' />:<IoIosArrowDown className='inline mt-2 ml-1' />}
                      {productItems?  
                         <ul className='py-2  px-8 mt-2 rounded-full  gap-8  top-20  bg-[black] absolute flex  '>
                             <Link to={'/shirt'}><li onClick={()=>setActive("shirt")} className={active==="shirt"?'border-b-4 border-[#d45606]':""}>Shirts</li></Link>
                            <Link to={'/pant'}> <li onClick={()=>setActive("pant")}  className={active==="pant"?'border-b-4 border-[#d45606]':""}>Pants</li></Link>
                            <Link to={'/tshirt'}> <li onClick={()=>setActive("tshirt")}  className={active==="tshirt"?'border-b-4 border-[#d45606]':""}>T-shirts</li></Link>
                            <Link to={'/shoe'}> <li onClick={()=>setActive("shoe")}  className={active==="shoe"?'border-b-4 border-[#d45606]':""}>Shoes</li></Link>
                           <Link to={'/watch'}>  <li onClick={()=>setActive("watch")}  className={active==="watch"?'border-b-4 border-[#d45606]':""}>Watches</li></Link>
                           <Link to={'/perfume'}>  <li onClick={()=>setActive("perfume")}  className={active==="perfume"?'border-b-4 border-[#d45606]':""}>Perfumes</li></Link>
                           <Link to={'/accessories'}>  <li onClick={()=>setActive("accessories")}  className={active==="accessories"?'border-b-4 border-[#d45606]':""}>Accessories</li></Link>
                        </ul>  :<></>}
                    </li>
                </ul>
               
            </div>
                <div className='md:mr-10 lg:mr-20 py-4 hidden md:block'>
                    {localStorage.getItem("token")?
                        <button onClick={()=>{localStorage.removeItem("token");window.location.replace("/")}} className='bg-[#d45606] rounded-full  py-2 text-lg px-12 text-white mt-2 hover:bg-[red]'>Logout</button>:
                    <Link to={'/login'}><button onClick={()=>setActive("login")} className='bg-[#d45606] rounded-full  py-3  px-12 text-white mt-2 hover:bg-[red]'>Login</button></Link>
                    }
                </div>
                
                <Link to={'/cart'}><div className='mr-20 mt-2 text-3xl py-4 hidden md:block'>
                    <h1 className=' py-2 text-white'><FaCartShopping onClick={()=>{token?<></>:toast.error("Please Login");setActive('cart')}}/></h1>
                    <span className=' text-base absolute top-3 ml-3 rounded-full text-[red]'>{cartTotal()}</span>
                </div>
                </Link>


            <div className='md:hidden flex '>
                <div onClick={()=>setMenu((prev)=>!prev)} className='absolute right-4 sm:right-20 text-4xl top-4 text-white'>
                    {menu?<RiMenuUnfold2Line />:<RiMenuFold2Line />}
                </div>
                
                <div className={menu?'bg-[#ceb18c] h-[calc(100vh-4rem)] absolute left-0 w-[70vw] top-16 z-40 overflow-y-auto' : 'hidden'}>
                <div className=''>
                        <ul className='py-0 '>
                            <Link to={'/'}><li className='text-center   border-b-2 py-4 font-bold' onClick={()=>{setMenu(false);setActive('shirt')}}>Shop</li></Link>
                            <li onClick={()=>setDisplayType((prev)=>!prev)} className='text-center  py-4    py-4 border-b-2 font-bold'>Products category {displayType?<IoIosArrowUp className='w-full mt-2'/>:<IoIosArrowDown className='w-full mt-2'/>}</li>
                                <ul className={displayType?'w-full font-bold  items':'hidden'}>
                                    <Link to={'/shirt'} onClick={()=>{setMenu(false);setActive('shirt')}}><li className='border-b-2 py-4  text-center '>Shirts</li></Link>
                                    <Link to={'/pant'} onClick={()=>{setMenu(false);setActive('pant')}}><li className='border-b-2 py-4   text-center'>Pants</li></Link>
                                    <Link to={'/tshirt'} onClick={()=>{setMenu(false);setActive('tshirt')}}><li className='border-b-2 py-4  text-center'>T-shirts</li></Link>
                                    <Link to={'/shoe'} onClick={()=>{setMenu(false);setActive('shoe')}}><li className='border-b-2 py-4   text-center'>Shoes</li></Link>
                                    <Link to={'/watch'} onClick={()=>{setMenu(false);setActive('watch')}}><li className='border-b-2 py-4   text-center'>Watches</li></Link>
                                    <Link to={'/perfume'} onClick={()=>{setMenu(false);setActive('perfume')}}><li className='border-b-2 py-4   text-center'>Perfumes</li></Link>
                                    <Link to={'/accessories'} onClick={()=>{setMenu(false);setActive('accessories')}}><li className='border-b-2 py-4  text-center'>Accessories</li></Link>
                                </ul>
                        
                        </ul>
               
            </div>
             <div className='text-center mt-8'>
                    {localStorage.getItem("token")?
                        <button onClick={()=>{localStorage.removeItem("token");window.location.replace("/")}} className='bg-[#d45606] rounded-full  py-2 text-lg px-12 text-white mt-2 hover:bg-[red]'>Logout</button>:
                    <Link to={'/login'}><button onClick={()=>{setMenu((prev)=>!prev);setActive("login")}} className='bg-[#d45606] rounded-full  py-3  px-12 text-white mt-2 hover:bg-[red]'>Login</button></Link>
                    }
                </div>
               <Link to={'/cart'}> <div className='text-3xl flex justify-center mt-12 mb-4'>
                    <FaCartShopping onClick={()=>{token?<></>:toast.error("Please Login");setActive('cart');setMenu(false)}} />
                    <span className=' text-base relative bottom-6 right-4    rounded-full text-[red]'>{cartTotal()}</span>
                </div></Link>
                </div>
            </div>
        </div>
    </nav>
   </header>
  )
}

export default Navbar