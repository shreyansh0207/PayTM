const express = require("express");

const zod = require("zod");
const jwt = require("jsonwebtoken");
const { User } = require("../db");
const JWT_SECRET = require("../config");
const router = express.Router();

const signupSchema = zod.object({
    username : zod.string(),
    password : zod.string(),
    firstname : zod.string(),
    password :zod.string(),
})



router.post("/signup" , async(req,res) =>{
  const body = req.body;
  const {success} = signupSchema.safeParse(req.body);
  if(!success){
    return res.json ({
        message : "Email already taken / Incorrect inputs"
    })
  }

  const user = User.findone({  //check wheater user valid
    username : body.username
  })


  if(user._id){
    return res.json({
        message : "Email already taken / Incorrect inputs"
    })
  }
  const dbUser = await User.create(body);
  const token  = jwt.sign({
    userId : dbUser._id
  }  , JWT_SECRET);
  res.json({

    message : "User created successfully",
    token : token
  })




})

module.exports = router;
// const app = express();
