const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.get("/math", (req, res) => {
  console.log(req.query)
  res.json(req.query);
});

// app.post('/', (req, res) => {
//   res.send(req.body)
// })

app.listen(3000, (req, res) => {
  console.log("You are listening to port 3000");
});