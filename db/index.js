const Sequelize = require('sequelize');

const db = new Sequelize('RelatedItemModule', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
});

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// Categories is is ORM object you can work with & categories is Table-name
const Categories = db.define(
  'categories',
  {
    name: Sequelize.STRING,
  },
  { timestamps: false },
);

const Products = db.define(
  'products',
  {
    name: Sequelize.STRING,
    price: Sequelize.DECIMAL(6, 2),
    imageURL: Sequelize.STRING,
  },
  { timestamps: false },
);

Categories.hasMany(Products);
Products.belongsTo(Categories);

const Accessories = db.define(
  'accessories',
  {
    name: Sequelize.STRING,
    price: Sequelize.DECIMAL(6, 2),
    imageURL: Sequelize.STRING,
  },
  { timestamps: false },
);

Categories.hasMany(Accessories);
Accessories.belongsTo(Categories);

const ViewHistory = db.define('viewHistory', {
  productID: Sequelize.INTEGER,
});

// database Object.sync does all the syncs

db.sync().catch(() => {
  console.log('There was an error syncing');
});

module.exports = {
  db,
  ViewHistory,
  Products,
  Categories,
  Accessories,
};
