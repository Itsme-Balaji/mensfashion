const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose');

const app = express()
const port = process.env.PORT || 4000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())
app.use(cors());
// parse application/json
app.use(bodyParser.json())



const connection = mongoose.connect('mongodb://127.0.0.1:27017/mens_Fashion')
                    .then((res)=>console.log("db connected successfully"))
                    .catch((err)=>console.log("connection error"));

// user controllers
const users = require('./controllers/userController.js');
app.use('/user',users)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
