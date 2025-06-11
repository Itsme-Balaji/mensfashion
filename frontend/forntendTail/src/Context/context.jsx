import { createContext, useEffect, useState } from "react";
import Products from '../assets/productsDatas/allProductsInfo'





export const ProductsContext = createContext(null);

export const ProductsContextProvider = (props)=>{

    const [allProducts ,setAllProducts] = useState(Products);
    const [cartItems, setCartItems] = useState({});
    const [active,setActive] = useState("shop")

    useEffect(()=>{

         if(localStorage.getItem("token")){
            fetch("https://mensfashion-8.onrender.com/user/getcart",{
                method:"POST",
                headers:{
                    Accept:'application/form-data',
                    'token':`${localStorage.getItem("token")}`,
                    'Content-Type':'application/json',
                },
                
            })
            .then((response)=>response.json())
            .then((data)=>{
                if(data && data.status==="success"){
                    setCartItems(data.data)
                    
                }
            });

        }
    },[])


    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        if(localStorage.getItem("token")){
            fetch("https://mensfashion-8.onrender.com/user/addcart",{
                method:"POST",
                headers:{
                    Accept:'application/form-data',
                    'token':`${localStorage.getItem("token")}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId})
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));

        }
    }

    console.log("cartData",cartItems);
    

    const removeFromCart = (itemId)=>{

        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
        if(localStorage.getItem("token")){
            fetch("https://mensfashion-8.onrender.com/user/removecart",{
                method:"POST",
                headers:{
                    Accept:'application/form-data',
                    'token':`${localStorage.getItem("token")}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId})
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));

        }
        
    }

    const cartTotal = ()=>{
        let totalCart =0
        for(const items in cartItems){
            if(cartItems[items]>0){
                totalCart += cartItems[items];
            }
        }
        return totalCart;
    }


    const totalCartAmount = (itemId) =>{
        let cartTotalAmount =0;
        allProducts.map((item)=>{
            if(cartItems[item.id]>0){
                cartTotalAmount += item.newPrice * Number(cartItems[item.id]);
            }
        })
        return cartTotalAmount
    }


    

    const contextValue = {allProducts,cartItems,addToCart,removeFromCart,cartTotal,totalCartAmount,active,setActive};

    return (
    <ProductsContext.Provider value={contextValue}>
            {props.children}

    </ProductsContext.Provider>
    )

   
}

export default ProductsContextProvider;
