const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose');

const app = express()
const port =  4000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())
app.use(cors());
// parse application/json
app.use(bodyParser.json())



const connection = mongoose.connect('mongodb+srv://balaji18:bal809ii@cluster0.bvyxu0o.mongodb.net/mens_Fashion?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("DB connected successfully"))
.catch((err) => console.log("Connection error:", err));

// user controllers
const users = require('./controllers/userController.js');
app.use('/user',users)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
