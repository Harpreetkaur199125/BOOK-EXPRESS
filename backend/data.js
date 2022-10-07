const users = [
  {
    _id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
    firstname: 'Charles',
    surname: 'Dickens',
    email: 'charles@email.com',
    password: '12345',
  },
  {
    _id: '1b9d6bcd-bbfc-4b2d-5f7r-ab8dfbhnekw2',
    firstname: 'William',
    surname: 'Shakespeare',
    email: 'william@email.com',
    password: '12345',
  },
];

const books = [
  {
    _id: '1',
    author: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
    title: 'Oliver Twist',
    cover_image:
      'https://images-na.ssl-images-amazon.com/images/I/81QGqaKWjXL.jpg',
    pages: 234,
    releaseDate: '1839',
    isbn: 'wt345',
    wishListedBy: [],
    subscribedBy: [],
  },
  {
    _id: '2',
    author: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
    title: 'Hard Times',
    cover_image:
      'https://rukminim1.flixcart.com/image/416/416/k5si2kw0/regionalbooks/k/k/t/charles-dickens-hard-times-original-imafzekkhmzbcvzm.jpeg?q=70',
    pages: 300,
    releaseDate: '1854',
    isbn: 'jk654',
    wishListedBy: [],
    subscribedBy: [],
  },
  {
    _id: '3',
    author: '1b9d6bcd-bbfc-4b2d-5f7r-ab8dfbhnekw2',
    title: 'Hamlet',
    cover_image:
      'https://kbimages1-a.akamaihd.net/695eb39e-9405-4c4b-8267-302344f0f5f7/1200/1200/False/hamlet-15.jpg',
    pages: 160,
    releaseDate: '1603',
    isbn: 'po789',
    wishListedBy: [],
    subscribedBy: [],
  },
  // {
  //   _id: 4,
  //   author_id: 2,
  //   title: 'IT',
  //   cover_image: '',
  //   pages: 500,
  //   releaseDate: '2017',
  //   isbn: 'yu098',
  //   wishListedBy: [],
  // },
  // {
  //   _id: 5,
  //   author_id: 4,
  //   title: 'Norwegian Wood',
  //   cover_image:
  //     'http://t1.gstatic.com/images?q=tbn:ANd9GcQvJJDi2mzwg9v_PlmKYL31gXIz0kvAObJak7DVFPcD_mJTIyec',
  //   pages: 296,
  //   releaseDate: '1987',
  //   isbn: 'hj846',
  //   wishListedBy: [],
  // },
  // {
  //   _id: 6,
  //   author_id: 4,
  //   title: 'Kafka on the Shore',
  //   cover_image:
  //     'http://t0.gstatic.com/images?q=tbn:ANd9GcRHFU_j93PPsbQGqoaZJnHH6-Emk_sIxG823SkoRTL0nvdEP41f',
  //   pages: 505,
  //   releaseDate: '2002',
  //   isbn: 'op012',
  //   wishListedBy: [],
  // },
  // {
  //   _id: 7,
  //   author_id: 4,
  //   title: 'After Dark',
  //   cover_image:
  //     'http://t3.gstatic.com/images?q=tbn:ANd9GcQBMNA8A19vQpNY4bkgadsLhiRUFqBKwKAA6ANrw8VEtOiPrYQJ',
  //   pages: 208,
  //   releaseDate: '2004',
  //   isbn: 'cv456',
  //   wishListedBy: [],
  // },
  // {
  //   _id: 8,
  //   author_id: 4,
  //   title: '1Q84',
  //   cover_image:
  //     'http://t0.gstatic.com/images?q=tbn:ANd9GcTBQZSg-b2LFkLlt9fWndS1w8SONabDZBHf0dtdb3-bqcuKxduL',
  //   pages: 928,
  //   releaseDate: '2009',
  //   isbn: 'al207',
  //   wishListedBy: [],
  // },
];

module.exports = { users, books };
