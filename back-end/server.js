const express=require("express")
const mongoose=require("mongoose")
const bcyrpt =require("bcrypt")
const cors=require("cors")
const server=express()
const productData=require("./jsonwebdata")

const jwt=require("jsonwebtoken")



const userSchema = require("./models/userSchema")
const checkUser = require("./middleWare/app")

require("dotenv").config()
const PORT= process.env.PORT;

const URI=process.env.URI;

server.use(express.json())
server.use(cors())


mongoose.connect(URI,{ useNewUrlParser: true})
    .then(()=>console.log("mongodb successfully connected"))
    .catch((err)=>console.log(err,"Error"))
    const maxAge = 3 * 24 * 60 * 60;
    const createToken = (id) => {
      return jwt.sign({ id }, 'hyrr-details', {
        expiresIn: maxAge
      });
    };
    ﻿
  server.get('*', checkUser)  
  // Route to handle pagination requests
server.get('/products', (req, res) => {
    const page = parseInt(req.query.page);
    const pageSize = parseInt(req.query.pageSize);
  
    // Calculate the start and end indexes for the requested page
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;
  
    // Slice the products array based on the indexes
    const paginatedProducts = productData.slice(startIndex, endIndex);
  
    // Calculate the total number of pages
    const totalPages = Math.ceil(productData.length / pageSize);
  
    // Send the paginated products and total pages as the API response
    res.json({ products: paginatedProducts, totalPages });
  });
  

server.post("/signup" ,(req,res)=>{
    const{name ,email,password,confirmpassword}=req.body
    console.log({name ,email,password,confirmpassword})
    try{
        const details=userSchema.create({name ,email,password,confirmpassword})
        const token=createToken(details)
        res.cookie("jwt",token,{httpOnly:true,maxAge:maxAge*1000})
        res.status(200).json({details})

    }
    catch(err){
        res.status(303).json({err:"userdetails does't post"})
    }
})

server.listen(PORT,()=>{
    console.log(`Server is running ${PORT}`)
})
