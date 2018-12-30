const faker = require('faker');
const { db } = require('./index.js');
const { ViewHistory } = require('./index.js');
const { Products } = require('./index.js');
const { Categories } = require('./index.js');
const { Accessories } = require('./index.js');

const categoriesData = (function data() {
  const categories = ['appleTablets', 'non_Apple_Tablets', 'random'];

  return categories;
}());

const productsData = (function data() {
  const products = [
    {
      name: 'iPad',
      price: 249.99,
      imageURL:
        'https://target.scene7.com/is/image/Target/GUEST_358cafbc-644b-46cd-a0e3-66b8a6763a75?wid=325&hei=325&qlt=80&fmt=webp',
    },
  ];

  return products;
}());

const accessoriesData = (function data() {
  const accessories = {
    appleTablets: [
      {
        name: 'Apple® Pencil 1st Generation',
        price: 99.99,
        imageURL:
          'https://target.scene7.com/is/image/Target/50220026?wid=250&hei=250&qlt=80&fmt=pjpeg',
      },
      {
        name: 'Apple® Lightning to USB Cable (2m)',
        price: 29.99,
        imageURL:
          'https://target.scene7.com/is/image/Target/50512957?wid=250&hei=250&qlt=80&fmt=webp',
      },
      {
        name: 'Apple® AirPods',
        price: 159.99,
        imageURL:
          'https://target.scene7.com/is/image/Target/52106337?wid=250&hei=250&qlt=80&fmt=webp',
      },
      {
        name: 'Apple® Wired Earpods',
        price: 29.99,
        imageURL:
          'https://target.scene7.com/is/image/Target/51530146?wid=250&hei=250&qlt=80&fmt=webp',
      },
      {
        name: 'Apple® Lightning to Digital AV Adapter',
        price: 49.99,
        imageURL:
          'https://target.scene7.com/is/image/Target/51677595?wid=250&hei=250&qlt=80&fmt=webp',
      },
    ],
    non_Apple_Tablets: [
      {
        name: 'Fellowes® Tablet Riser, 8 3/8 x 5 3/8 x 4 5/8, Black/Gray',
        price: 11.69,
        imageURL:
          'https://target.scene7.com/is/image/Target/GUEST_2034b488-8b70-4a97-ab2e-f04b4d6fcd98?wid=253&hei=253&qlt=80&fmt=webp',
      },
      {
        name: 'Targus New Stylus for Tablets/Other Touch Screen - Black (AMM165US)',
        price: 8.99,
        imageURL:
          'https://target.scene7.com/is/image/Target/GUEST_cdfec344-3212-450a-8e51-556adef8ed7e?wid=253&hei=253&qlt=80&fmt=webp',
      },
      {
        name: "Skullcandy Ink'd Wired Earbuds With Microphone",
        price: 9.69,
        imageURL:
          'https://target.scene7.com/is/image/Target/GUEST_1be1b35c-ce83-4b4d-bb9f-de8a3ed36ed9?wid=253&hei=253&qlt=80&fmt=webp',
      },
      {
        name: 'Visual Land 7" ProFolio Universal Tablet Case',
        price: 18.98,
        imageURL:
          'https://i5.walmartimages.com/asr/844d4d08-6060-45d0-9c30-fc4ee96f30dc_1.c6c3debb4cc5c56969c263c1f3512ac4.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF',
      },
      {
        name: 'Sdeals Universal 7" Tablet Case with Keyboard, Adapter and Stylus. Black',
        price: 9.99,
        imageURL:
          'https://i5.walmartimages.com/asr/dfab0516-4cac-4bf4-80a2-681eb9df6039_1.dd310f7e6dec90e16410c896516687e9.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF',
      },
    ],
    random: [],
  };

  for (let i = 1; i <= 5; i++) {
    accessories.random.push({
      name: faker.commerce.productName(),
      price: faker.finance.amount(),
      imageURL: faker.image.imageUrl(),
    });
  }

  return accessories;
}());

db.sync({ force: true })
  .then(() => {
    categoriesData.forEach((categoryItem) => {
      Categories.create({
        name: categoryItem,
      })
        .then((category) => {
          const categoryName = category.get('name');

          accessoriesData[categoryName].forEach((accessory) => {
            Accessories.create({
              name: accessory.name,
              price: accessory.price,
              imageURL: accessory.imageURL,
              categoryId: category.get('id'),
            });
          });
        })
        .then(() => console.log('worked!'));
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
