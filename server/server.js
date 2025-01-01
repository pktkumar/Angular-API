// server/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const data = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

app.get('/api/items', (req, res) => {
  res.json(data);
});

app.get('/user', (req, res) => {

  console.log("name "+ req.query.name);
  console.log("Age " + req.query.age);
  const namefromHeader = req.header('Namefrom-Header');
  console.log("namefromHeader..... " + namefromHeader);

  res.send();
});

app.post('/api/items', (req, res) => {
  const newItem = req.body;
  newItem.id = data.length + 1;
  data.push(newItem);
  res.json(newItem);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
