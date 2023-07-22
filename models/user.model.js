/**
 * this will hold the schema for the user
 * 
 * Its explains to different fields of use and how it will be 
 * stored in the mongodb
 */

const mongoose = require('mongoose');
const userschema = new mongoose.Schema({
    name : {
        type : String,
        required : true 
    },

    userId : {
        type : String,
        required : true,               
        unique : true
    },

    password : {
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true,
        unique : true,
        minLength : 10,
        lowercase : true
    },

    userType : {
        type : String, 
        required : true,
        default : "CUSTUMER",
        enum : ["CUSTOMER", "ADMIN"]
    }

}, {timestamps : true});

/**
 * Define the collection name where it will be stored
 */

module.exports = mongoose.model("User", userSchema);


