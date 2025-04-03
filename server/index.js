// load the http module to create an http server

// Always use const instead of var (only used once)
// Let and var are almost the same, var is for function (if statement) and let is like (for statement)
// Accepted progress is 1) const, 2) let and then 3) var
const express = require("express");
const productsController = require("./controllers/products");

const PORT = 8000;

const app = express();

//Middleware  (process it only if its nessesary)
    app.use(express.json()); // Parse JSON request body

//Controller 
app
  .get("/hello", (req, res) => {
    res.send("Hello New Paltz, Ny!!!");
  })

  .use("/api/v1/products", productsController)

  .use('/', express.static('dist')) // Serve static files from the public directory

//error handling middleware
app.use((err, req, res, next) => {
  console.error(err)
  const status = err.status || 500

  const error = {
    status,
    message: err.message || 'Internal Server Error',
  }
  res.status(status).send(error)
 })
//Added above is "/api/v1/products" to the server original was "/products"

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
// Above is

console.log("Hello World!");
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
/* 
  Ways to send data to the server.
  Correct order ( 2, 1, 4, 3)
1) Query paramteres: ?name=John$age=30
2) Path Parameters:  /users/123  
3) Request Body: { "name": "John", "age": 30 } (Shows up after first blank sign below Content-Type:)
3.0 ) Form Data: name=John&age=30
3.5) JSON Data: { "name": "John", "age": 30 }
4) Headers:
4.5) Cookies
*/

/*
Parts of a URL:
1) Protocol: http, https, ftp, etc. (http:// or https://)
2) Domain: www.example.com, localhost, etc. (www.example.com)
3) Port: 80, 443, etc. (default is 80 for http and 443 for https)
4) Path: /products, /users, etc. (/path/to/resource)
5) Query String: ?name=John&age=30 (everything after the question mark is a query) (Pattern to use is form data: ?parametername=parametervalue&parametername=parametervalue)
6) Fragment: #section1 (anything after the pound sign, meant for the browser)

example: https://www.example.com:80/path/to/resource?name=John&age=30#section1
*/

/*
Module Types:
1) CommonJS: 
    import: require('module')
    export: module.exports = {function,variables,etc}
2) ES6:
    import: import {function,variables,etc} from 'module'
    export: export {function,variables,etc}
*/

// Asynchronous can not have real value or return value. Can be used when node takes more than split second to run.

/*
  Asynchronous Programming in Node.js:
   1) Call Backs
   2) Pipeline
   3) Promises :  a object that has a set that knows what they do, and promises when its done its going to call its done and if not then it will say error
   4) Async/Await : put the async in front of the function, await creates a promise for you and only allowed to call it inside async function

*/
