const mongoose = require("mongoose");
const { Schema } = mongoose;

const adminSignUp = new Schema({
    first_name:{type:String,
        required: [true, 'First Name is require']},
    last_name:{type:String,
        required: [true, 'Last Name is require']},
    email:{type:String,
        required: [true, 'Email is require']},
    gender:{type:String,
        required: [true, 'Gender is require']},
   
}, {timestamps : true})

const userData = mongoose.model("UserData", adminSignUp);
module.exports =userData ;