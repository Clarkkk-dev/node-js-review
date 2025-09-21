const err = new Error("Something went wrong");


// console.log(err.message);

//can also use throw keyword
// throw new Error("Throw error object");


//uncaught exeption uses to catch error that is not defined in a try catch function it is basically a fallback error prompt

const doSomething = () => {
    // console.log("Hello Claire");
    return data;
}

//exceptions with async and await

const someFunction = async () => {
    try {
        await doSomething();
    }catch(err) {
        console.error(err.message);
    }
}

someFunction();

console.log(data); //error data is not defined

process.on("uncaughtException", (err) => {
    console.log("There was an uncaught exception". err);
    process.exit(1);
})