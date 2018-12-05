const axios = require("axios");
const express = require("express");
const app = express();



// const getGifs = (req, res, next) => {
//   axios.get(`http://api.giphy.com/v1/gifs/search?q=${searched}&api_key=M0232PRL539A1xx8A99hwy0GOMWW0SIO`)
//     .then(response => {
//       res.gifs = response.data.data;
//       next();
//     })
// }
//localhost:3000/gif/?search=spongebob
app.get('/:gif', (req, res) => {

  let gifSearched = req.params.gif;
  let route = req.params.route;
  let inputs = req.query;
  let theSearched = inputs['search']
  let searchh = [];
  // console.log(gifSearched);
  axios.get(`http://api.giphy.com/v1/gifs/search?q=${theSearched}&api_key=M0232PRL539A1xx8A99hwy0GOMWW0SIO`)
    .then(response => {

      res.gifs = response.data.data
      //.images.downsized.url
      console.log(res.gifs[0].images.downsized.url)
      searchh.push(res.gifs[0].images.downsized.url);
      res.json(searchh);
    })


});

app.listen(3000, (req, res) => {
  console.log("You are listening to port 3000 at gif");
});