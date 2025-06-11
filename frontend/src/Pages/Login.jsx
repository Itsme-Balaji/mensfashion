import React, { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {
    const [creation, setCreation] = useState("Login");
    const [formData, setFormData] = useState({
      name:"",
      email:"",
      password:"",

    });

    const changeHandler = (event) =>{
      setFormData({...formData,[event.target.name]:(event.target.value).trim()})
    }


    const signup = async () =>{
      let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if(formData.name){
        if(formData.email){
          if(regex.test(formData.email)){
                    if(formData.password){
                    if((formData.password).length>=4){
                        const response = await axios.post("http://localhost:4000/user/register",formData);
                        if(response.data.status){
                          localStorage.setItem("token",response.data.token);
                          setFormData({
                            name:"",
                            email:"",
                            password:"",
                          })
                          toast.success("Account Created Successfully")

                          setTimeout(()=>{
                            window.location.replace("/");
                          },500)
                        }else{
                          toast.error("Email already Exists")

                        }
                    }else{
                      toast.error("Enter Strong Password")

                    }
                      
                  }else{
                    toast.error("Password is Required")
                  }
          }else{
            toast.error("Enter Valid Email")
          }
          
        }
        else{
            toast.error("Email is Required")
        }
      }
      else{
            toast.error("Name is Required")

      }

    }

    //login 

    const login = async () =>{
      if(formData.email){
        if(formData.password){
          const response = await axios.post("http://localhost:4000/user/login",formData);
            if(response.data.status){
              localStorage.setItem("token",response.data.token);
              setFormData({
                name:"",
                email:"",
                password:"",
              })
              toast.success("Login Successfully")

              window.location.replace("/");
            
            }else{
            toast.error(response.data.message)

            }
        }else{
            toast.error("Password is Required")
        }
      }
      else{
            toast.error("Email is Required")

      }
    }


  return (
    <section className='bg-[black] flex  justify-center  items-center min-h-[100vh] fixed w-[100%] z-0'>
      <Link to={'/'}><div className='text-white absolute top-4 left-8 md:hidden text-2xl'><FaArrowAltCircleLeft /></div></Link>
        <div className='bg-[#3f2a1b] mb-[100px] md:mb-[0px] h-[420px] w-[400px] p-4 rounded-[0.8rem] '>
            <h1 className='text-lg text-center mt-4 font-bold text-white'>{creation}</h1>
            <div className='mt-12 z-0'>
               {creation==="SignUp"?<div className='text-center'><input type='text' onChange={changeHandler} value={formData.name} name='name' placeholder='Your Name' required className='p-2 w-[90%] mb-4 rounded-[0.5rem] m-auto'/></div>:<></>}
                <div className='text-center'><input type='email' onChange={changeHandler} value={formData.email} name='email' placeholder='Your Email' required className='p-2 w-[90%] mb-4 rounded-[0.5rem]'/></div>
               <div className='text-center'> <input type='password' onChange={changeHandler} value={formData.password} name='password' placeholder='Your Password' required className='p-2 w-[90%] mb-4 rounded-[0.5rem]'/></div>
               <div className='text-center'><button className='bg-[#d45606] p-2 w-[90%] mb-4 rounded-[0.5rem] hover:bg-[red]' onClick={()=>{creation==="Login"?login():signup()}}>continue</button></div>
              
               {creation==="Login"?<div className='ml-6 mt-2 text-white'><span >Create New Account</span>  <span className='text-[#d45606] ml-4 underline cursor-pointer hover:text-[red]' onClick={()=>setCreation("SignUp")}>Click Here</span></div>
               :
                <div className='ml-6 mt-2 text-white'><span >Already have Account?</span>  <span className='text-[#d45606] ml-4 underline cursor-pointer hover:text-[red]' onClick={()=>setCreation("Login")}>Click Here</span></div>
                }
               
            </div>

        </div>
    </section>
  )
}

export default Login