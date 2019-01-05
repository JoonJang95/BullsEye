const express = require('express');

const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../db/index.js');

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(/(\/\d+)/, express.static(path.join(__dirname, '../public')));
/* Request Handling */

// Get current Product
app.get('/currentProduct/:id', (req, res) => {
  db.Products.findByPk(req.params.id)
    .then((product) => {
      res.status(200).json(product);
    })
    .catch((error) => {
      console.log('There was an error getting curr Product from the DB: ', error);
      res.sendStatus(404);
    });
});

// Get current product accessories
app.get('/items/:id', (req, res) => {
  db.Products.findByPk(req.params.id).then((product) => {
    db.Accessories.findAll({
      where: {
        categoryName: product.dataValues.categoryName,
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
});

// Get current product related Items
app.get('/relatedItems/:id', (req, res) => {
  db.Products.findAll()
    .then((products) => {
      const appleProducts = products.slice(0, 6);
      const nonAppleProducts = products.slice(6, 12);
      const randomProducts = products.slice(12);
      console.log('PRODUCTSsssss', appleProducts);
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

// Get related items & accessories data for new product

app.get('/items/changeProduct/:categoryName', (req, res) => {
  console.log(req.params.categoryName);
  db.Accessories.findAll({
    where: {
      categoryName: req.params.categoryName,
    },
  })
    .then((accessories) => {
      db.Products.findAll().then((products) => {
        const appleProducts = products.slice(0, 6);
        const nonAppleProducts = products.slice(6, 12);
        const randomProducts = products.slice(12);

        res.status(200).json({
          accessories,
          appleProducts,
          nonAppleProducts,
          randomProducts,
        });
      });
    })
    .catch((error) => {
      console.log(
        'There was an error getting new related items and accessories from the DB: ',
        error,
      );
      res.sendStatus(404);
    });
});

// Get past viewed items from db

app.get('/items/savedViewHistory', (req, res) => {
  db.ViewHistory.findAll()
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((error) => {
      console.log('There was an error getting pastItems from the DB: ', error);
      res.sendStatus(404);
    });
});

// save currentProduct to viewHistory db

app.post('/items/saveProduct', (req, res) => {
  console.log(req.body);
  db.ViewHistory.findOrCreate({
    where: {
      id: req.body.productID,
    },
    defaults: {
      name: req.body.name,
      productID: req.body.productID,
      price: req.body.price,
      imageURL: req.body.imageURL,
      categoryName: req.body.categoryName,
    },
  })
    .spread(() => {
      res.status(201).json(req.body);
    })
    .catch((error) => {
      console.log('There was an error posting pastItems to the DB: ', error);
      res.sendStatus(501);
    });
});

const port = 9000; // Change Me for Proxy!!

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
