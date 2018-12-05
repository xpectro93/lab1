const express = require("express");
const app = express();
//localhost:3000/math/mul?a=1&b=4&c=5
app.get('/:route/:operator', (req, res) => {
  let ope = req.params.operator;
  let route = req.params.route;
  let inputs = req.query;

  let inputValues = Object.values(inputs);
  console.log(req.query)
  console.log(route);

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


  let apple = 0;
  if (ope === "add") {
    apple = inputValues.reduce((acc, el) => {
      return parseInt(acc) + parseInt(el)
    })
  } else if (ope === "sub") {
    apple = inputValues.reduce((acc, el) => {
      return parseInt(acc) - parseInt(el)
    })

  } else if (ope === "mul") {
    apple = inputValues.reduce((acc, el) => {
      return parseInt(acc) * parseInt(el)
    })

  } else if (ope === "div") {
    apple = inputValues.reduce((acc, el) => {
      return parseInt(acc) / parseInt(el)
    })

  }
  let out = {
    input: inputs,
    substring: inputValues.join(` ${opAssign(ope)} `),
    something: apple,
  }
  res.send(out)

})


// })

app.listen(3000, (req, res) => {
  console.log("You are listening to port 3000");
});