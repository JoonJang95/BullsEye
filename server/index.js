const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const db = require('../db/index.js');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(`${__dirname}/../public`));

/* Request Handling */

// Get initial current product accessories
app.get('/items/accessories/ipad', (req, res) => {
  db.Accessories.findAll({
    where: {
      categoryName: 'appleTablets',
    },
  })
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((error) => {
      console.log('There was an error getting accessories from the DB: ', error);
      res.sendStatus(404);
    });
});

// Get initial current product related Items
app.get('/items/relatedItems/ipad', (req, res) => {
  db.Products.findAll()
    .then((products) => {
      const appleProducts = products.slice(0, 6);
      const nonAppleProducts = products.slice(6, 12);
      const randomProducts = products.slice(12);

      res.status(200).json({
        appleProducts,
        nonAppleProducts,
        randomProducts,
      });
    })
    .catch((error) => {
      console.log('There was an error getting products from the DB: ', error);
      res.sendStatus(404);
    });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
