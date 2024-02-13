const express = require("express");
const morgan = require('morgan')

// Note: I used only the get method request for the routes (/, /about) remaining methods are handeled by 404 response.

const app = express();

// using morgan for the logging
app.use(morgan('combined'))


app.get("/", (req, res) => {
  
  res.status(200).send("<h1 style='text-align:center'>Welcome to this simple http server build with express</h1>");
});

app.get('/about', (req, res) => {
  res.status(200).send("I am sri ranga sai, a full stack web developer. you can find my details on <a target='__blank' href='https://www.srirangasai.dev'>here</a>")
})

// handling other routes and methods
app.all('*', (req, res) => {
  res.status(404).send('There is nothing here except you and I')
})

app.listen(4000, () => {
  console.log(`Running on http://localhost:4000`);
});
