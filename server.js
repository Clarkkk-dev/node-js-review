
const { error } = require("console");
const http = require("http");
const { json } = require("stream/consumers");
require("dotenv").config();

const PORT = process.env.PORT || 3000;



//when dealing with setHeader there are lot of http headers one of this is content type

//you specify content type if you are passing or specifying what types of data needs to be pass

//there are tons of http headers access control-allow origin etc.
const server = http.createServer((req, res) => {
    res.statusCode = 200;

    //specify what type of data we need to pass
    res.setHeader("content-Type", "application/json");

    //allows us to write json data
    //json.strinfiy allows us to convert JS objects to json format
    //it is use and effecient way of sending json data
    res.write(JSON.stringify({message: "Hello to Node JS"}))
    res.end();
});

server.listen(PORT, () => {
    console.log(`Server is starting on ${PORT}`);
});