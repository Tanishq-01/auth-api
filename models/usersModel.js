const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email:{
        type : String,
        required : [true,'Email is required!'],
        trim : true,
        unique : [true,'Email must be unique'],
        minlength : [5, 'Email must have min 5 characters!'],
        lowercase : true,
    },
    password:{
        type : String,
        required : [true, 'Password is required!'],
        trim : true,
        select : false,
    },
    verified:{
        type : Boolean,
        default : false,
    },
    verificationCode:{
        type : String,
        select : false,
    },
    verificationCodeValidation:{
        type : String,
        select : false,
    },
    forgotPasswordCode:{
        type : String,
        select : false,
    },
    forgotPasswordCodeValidation:{
        type : String,
        select : false,
    }
},{
    timestamps : true
});

module.exports = mongoose.model("User",userSchema);