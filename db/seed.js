const ORM = require('./index.js');

ORM.db
  .sync({ force: true })
  .then(() => {
    ORM.Categories.create({
      name: 'i135135ked',
    });

    ORM.Products.create({
      name: 'did it work?',
      price: 100.99,
      imageURL: 'so13513513RL',
    });

    ORM.Accessories.create({
      name: 'workeddd',
      price: 59.99,
      imageURL: '1513eahaeh53151',
    });

    ORM.ViewHistory.create({
      productID: 1,
    });
  })
  .catch(() => {
    console.log('error with syncing seeds');
  });
