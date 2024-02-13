const express = require("express");
const morgan = require("morgan");

// PORT

const PORT = 4000;
const app = express();

// using morgan for the logging
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res
    .status(200)
    .send({ message: "Welcome to this simple http server build with express" });
});

app.get("/about", (req, res) => {
  res
    .status(200)
    .send({
      firstName: "Sri Ranga Sai",
      lastName: "Pagala",
      dob: "23-05-2000",
      occupation: "Full stack web developer",
    });
});

// handling other routes and methods
app.get("*", (req, res) => {
  res.status(404).send({ message: "There is nothing here except you and I" });
});
try {
  app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
  });
} catch (e) {
  console.log(e.message);
}
