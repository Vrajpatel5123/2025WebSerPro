
    // load the http module to create an http server

    // Always use const instead of var (only used once)
    // Let and var are almost the same, var is for function (if statement) and let is like (for statement)
    // Accepted progress is 1) const, 2) let and then 3) var
    const express = require('express');
    const PORT = 8000;

    const app = express();

    app.get('/', (req, res) => {
        res.send('Hello New Paltz, Ny!!!');
    })

    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}/`)
    })
    // Above is 

    console.log('Hello World!');
    // Javascript " " and ' ' is the same

    /*
    // Configure our HTTP server to respond with Hello World to all request
    const server = http.createServer((request, response) => {
        response.writehead(200, {'Content-Type': 'text/plain'});
        response.end('Hello World!!\n');
        // If I change response.end to Hello new paltz then it will say error address in use because of port is 8000 in use when programm is running
    });

    */

    /*const server = http.createServer(function handler(request, response) {
        response.writehead(200, {'Content-Type': 'text/plain'});
        response.end('Hello World\n');
    });*/

    /* const square = x => x * x */

    /*
    // Listen on port 8000, IP defaults to
    server.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}/`);
    });
    */

    // To run, go to turn and type in "node server/index.js"
    // type in npm intall -g pnpm
    // then type in pnpm init