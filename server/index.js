const express = require('express');

const port = 3007;

const app = express();

app.use(express.static('build'));
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello world!');
})
app.listen(port, () => {
  console.log(`Server is listening on port ${port}!`)
})