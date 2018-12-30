const { db } = require('./index.js');
const { ViewHistory } = require('./index.js');
const { Products } = require('./index.js');
const { Categories } = require('./index.js');
const { Accessories } = require('./index.js');

db.sync({ force: true })
  .then(() => {
    Categories.create({
      name: 'Apple',
    }).then((category) => {
      Products.create({
        name: 'apple tablet',
        price: 249.99,
        imageURL: 'aeijoaeijoaejtoaeitj',
        categoryId: category.get('id'),
      }).then(() => console.log('worked!'));
    });

    // ORM.Products.create({
    //   name: 'did it work?',
    //   price: 100.99,
    //   imageURL: 'so13513513RL',
    // });

    // ORM.Accessories.create({
    //   name: 'workeddd',
    //   price: 59.99,
    //   imageURL: '1513eahaeh53151',
    // });

    // ORM.ViewHistory.create({
    //   productID: 1,
    // });
  })
  .catch(() => {
    console.log('error with syncing seeds');
  });
