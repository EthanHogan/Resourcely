const express = require('express');
const db = require('../database/index.js');

const port = 3007;

const app = express();

app.use(express.static('build'));
app.use(express.json());
app.use(express.urlencoded({extended: true}))


app.get('/all', (req, res) => {
  // hard coded user. update to accept params to determine user later
  let userID = 1;
  db.getAll(userID)
  .then(result => res.send(result))

})

app.post('/category', (req, res) => {
  let categoryName = req.body.name;
  let userID = req.body.userID;
  db.addCategory(categoryName, userID)
  res.send('/category request recieved!')
})

app.post('/resource', (req, res) => {
  let title = req.body.title;
  let description = req.body.description;
  let link = req.body.link;
  let categoryName = req.body.categoryName;
  db.addResource(title, description, link, categoryName)
  res.send('/resource request recieved!')
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}!`)
})