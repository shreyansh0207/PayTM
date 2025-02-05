const express = require("express");
const router = express.Router();
const zod = require("zod");

const signupSchema = zod.object({
    username : zod.string(),
    password : zod.string(),
    firstname : zod.string(),
    password :zod.string(),
})



router.post("/signup" , (req,res) =>{
  const body = req.body;
})

module.exports = router;
// const app = express();
