
//the use "require" is used to load the package you have installed like dotenv, moongoose, express, etc..

//the .config is associated with the dotenv package to read when and how the env should be read
// require("dotenv").config();

// console.log(process.env.NAME);
// console.log(process.env.PROFESSION);




//if you want to see all the package installed "npm list"


//semantiv versionning





//EXPRESS TUTORIAL DAY1

//uses common js but module in more modern way of importing packages
// const express = require("express");

import express from 'express';
import { searchController, usernameController } from './controller.js';
import router from './route.js';

const app = express();

const PORT = process.env.PORT || 3000;



//HTTP METHOS GET, PUT, DELETE, POST
//PATH is the api endpoint or url route e.g. /users
//HANDLER is the callback function when that path is called
//app.METHOD(path, handler)
// define a simple route

// app.get('/', (req, res) => {
//      res.status(200).send('Hello EXPRESS'); 
// })

// app.get('/about', (req, res) => {
//      res.status(200).send('about my crush who is it?'); 
// })


//dynamic routing is used to capture or get the dynamic value from the URL

// app.get('/user/:username', usernameController);

// //sarching routes search?keyword=express
// app.get('/search', searchController);


//router using routes js
//note the when using the .use we are setting 2 parameters/values 1st is the mother/base url path or base api endpoint, 2nd is the route we specify on the route.js
app.use('/user', router);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}!`);
})



//creating separate routes folder


