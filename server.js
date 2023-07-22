const express = require('express');

const serverconfig = require('./configs/server.config');
const mongoose = require('mongoose');
const dbconfig = require('./configs/db.config') ;




const app = express();

/**
 * logic to connect to mongodb and create an ADMIN user
 * need to have the mongoose up and running in your local machine
 */

mongoose.connect(dbconfig.DB_URL) ;
const db = mongoose.Connection ;

db.on("error", ()=>{
    console.log("Error while connecting to DB") ;
});

db.once("open", ()=>{
    console.log("DB is connected");
})


app.listen(serverconfig.PORT , ()=>{
    console.log(`server started on the port number ${serverconfig.PORT}` );
})