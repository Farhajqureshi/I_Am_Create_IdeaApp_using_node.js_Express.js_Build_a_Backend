const express = require("express");
const app = express();

app.use(express.json());

app.use(middleWare);

function middleWare(req, res, next) {
  console.log("Inside the middle ware I created");
  next(); // It will pass on the control to the next step
}

// Stich the Routes to the server 

require("./Routes/idea.routes")(app);

// Starting The server

app.listen(8081, function () {
  console.log("Start The Server");
});
