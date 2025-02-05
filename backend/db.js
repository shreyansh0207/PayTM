const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://shuklashreyansh0207:gFyxp0L0uz3tgoQ8@cluster0.vlkn4.mongodb.net/paytm");

const userSchema = mongoose.Schema({
    username : String,
    password : String,
    firstname : String,
    lastname : String,
})

const User = mongoose.model("User" , userSchema);

module.exports = {
    User
}