const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const db = require('../db/index.js');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(`${__dirname}/../public`));

/* Request Handling */

// Get Initial Current Product accessories
app.get('/items/accessories/ipad', (req, res) => {
  db.Accessories.findAll({
    where: {
      categoryName: 'appleTablets',
    },
  }).then((results) => {
    res.status(200).json(results);
  });
});

app.get('/test', (req, res) => {
  res.json('heyyyy');
});

const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
