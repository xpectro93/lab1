const express = require("express");
const app = express();


// app.get("/:route/:op", (req, res) => {
//   //this is the object of inputs
//   let inputs = req.query;
//   let output = {
//     input: inputs,
//     substring: Object.values(inputs),
//   }
//   res.json(
//     output;
//   )
// });

app.get('/:route/:op', (req, res) => {
  let op = req.params.op;
  let inputs = req.query
  let inputValues = Object.values(inputs)
  // console.log(req.query)

  function opAssign(op) {
    let add = "+";
    let sub = "-";
    let mul = "*";
    let div = "/";
    if (op === "add") {
      return add;
    } else if (op === "sub") {
      return sub;
    } else if (op === "mul") {
      return mul;
    } else if (op === "div") {
      return div;
    }

  }

  function evaluation(arr) {
    let output;
    if (op === "add") {
      output = arr.reduce((acc, el))
    } else if (op === "sub") {
      return sub;
    } else if (op === "mul") {
      return mul;
    } else if (op === "div") {
      return div;
    }

  }


  let asdf = inputValues.reduce((acc, el) => {
    return parseInt(acc) + parseInt(el);
    // 1 "hello" 2
  })
  let out = {
    input: inputs,
    substring: inputValues.join(` ${opAssign(op)} `),
    something: opWork(inputValues)
  }
  res.send(
    out
  )
})

app.listen(3000, (req, res) => {
  console.log("You are listening to port 3000");
});