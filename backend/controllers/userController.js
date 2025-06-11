const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');
const authMiddleware = require('../middleware/auth');

// User register
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const emailExists = await userModel.findOne({ email });
    if (emailExists) {
      return res.send({ status: 0, message: "Email already exists" }); 
    }

    let cart ={}
    for(let i =0; i<300;  i++){
        cart[i] =0
    }

    // Create new user
    const newUser = new userModel({ name, email, password,cartData: cart });

    // Save to DB
    await newUser.save();

    // Generate token
    const data = { user: { id: newUser._id } };
    const token = jwt.sign(data, 'balajiee');

    res.send({ status: 1, token });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).send({ status: 0, message: "Internal server error" });
  }
});


//user login

router.post('/login', async(req, res) => {
  const user = await userModel.findOne({email:req.body.email});
  if(user){
    const passCompare = req.body.password===user.password;
    if(passCompare){
        const data = {user:{id:user.id}}
        const token = jwt.sign(data,'balajiee');
        res.send({ status: 1, token });

    }
    else{
        return res.send({status:0,message:"Incorrect Password"});
    }
  }
  else{
        return res.send({status:0,message:"Email does not exists"});
  }
})

// add to cart 
router.post('/addcart',authMiddleware,async(req,res)=>{
  const userData = await userModel.findOne({_id:req.user.id});
  userData.cartData[req.body.itemId] +=1;
  await userModel.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData})
  res.send({status:1,message:"Cart added"})
})

// remove to cart 
router.post('/removecart',authMiddleware,async(req,res)=>{
  const userData = await userModel.findOne({_id:req.user.id});
  if(userData.cartData[req.body.itemId] >0)
  userData.cartData[req.body.itemId] -=1;
  await userModel.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData})
  res.send({status:1,message:"Removed"})
})

// get user cart
router.post('/getcart',authMiddleware,async(req,res)=>{
  try {
  const userData = await userModel.findOne({_id:req.user.id});
    if(!userData){
        res.status(404).send({ status: 0, message: "user not found" });
    }
    res.send({status:"success", data:userData.cartData})
  } catch (error) {
    console.error("cartGet Error",error);
    res.status(500).send({ status: 0, message: "server error" });
  }
})




module.exports = router
