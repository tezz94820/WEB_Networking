const express = require("express");
const axios = require("axios");
const cluster = require("cluster");

const totalCPUs = require('os').cpus().length;


const fabObj = require("./math-logic/fibonacci-series");

// const app = express();
// http://localhost:3000?number=10
// app.get("/", async (request, response) => {
//     console.log('API',new Date());
//     // let number = fabObj.calculateFibonacciValue(Number.parseInt(request.query.number));
//     await new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve();
//         }, 5000);
//     })
//     response.send(`<h1>hello</h1>`);
// });

// app.listen(3000, () => console.log("Express App is running on PORT : 3000"));


// if you give /number=80 then it takes time and the main execution thread is busy hence it will not be avialable for other request

async function fn() {

    const arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(axios.get('http://localhost:3000/?number=30'));
    }

    console.log((new Date()));
    await Promise.all(arr);
    console.log((new Date()));
}

// setTimeout(() => {
//     fn();
// }, 3000);





if (cluster.isMaster) {
    
    console.log(`Total Number of CPU Counts is ${totalCPUs}`);

    for (var i = 0; i < totalCPUs; i++) {
        cluster.fork();
    }
    cluster.on("online", worker => {
        console.log(`Worker Id is ${worker.id} and PID is ${worker.process.pid}`);
    });
    cluster.on("exit", worker => {
        console.log(`Worker Id ${worker.id} and PID is ${worker.process.pid} is offline`);
        console.log("Let's fork new worker!");
        cluster.fork();
    });
}
else {
    const app = express();

    app.get("/", async (request, response) => {
        console.log('API',new Date());
        // let number = fabObj.calculateFibonacciValue(Number.parseInt(request.query.number));
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 5000);
        })
        response.send(`<h1>hello</h1>`);
    });

    app.listen(3000, () => console.log("Express App is running on PORT : 3000"));
}