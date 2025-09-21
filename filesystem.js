
//path module

const path = require("path");
const filePath = "E:/Downloads/Documents/Clark files/NODE JS LEARNING/node-js-review/files/sample.txt";


// //dirname
// console.log(path.dirname(filePath));

// //basename
// console.log(path.basename(filePath));

// //extension
// console.log(path.extname(filePath));


// //directory name of our project
// console.log(__dirname);


// //file sysetm 
const  fs = require("fs");
// // console.log(fs);

fs.readFile(filePath, (err, data) => {

    if(err) {
        throw new Error("Something went wrong!");
    }
    console.log(data.toString());
});