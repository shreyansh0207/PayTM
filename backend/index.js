const express = require("express");

const app = express();


app.get("/",function(req,res){

})

app.post("/",function(req,res){
res.json({
    message : "Hi"
})
})

app.listen(3000,function(){
    console.log("Running");
});
