const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const db = require('../db/index.js');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('../public'));

// Request Handling

app.get('/api/item/:id', (req, res) => {
  let id = req.params.id;
  db.Products.findAll({
    where: {
      id: id
    }
  });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
