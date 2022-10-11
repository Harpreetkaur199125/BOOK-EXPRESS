'use strict';

//Here it import the needed node_modules.
const dotenv = require('dotenv');
const express = require('express');
const morgan = require('morgan');
const {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
  wishlistBook,
  subscribeBook,
} = require('./handlers/book');
const {
  getUser,
  getUserWishList,
  getUserSubscribedList,
} = require('./handlers/user');

dotenv.config();

// import handlers

express()
  .use(morgan('tiny'))
  .use(express.json())

  // define routes
  .get('/api/books', getBooks)
  .get('/api/books/:id', getBook)
  .post('/api/books', createBook)
  .patch('/api/books/:id', updateBook)
  .delete('/api/books/:id', deleteBook)
  .put('/api/books/wishlist/:id', wishlistBook)
  .put('/api/books/subscribe/:id', subscribeBook)

  .get('/api/users/:id', getUser)
  .get('/api/users/wishlist/:id', getUserWishList)
  .get('/api/users/subscribed/:id', getUserSubscribedList)

  .get('*', (req, res) => {
    res.status(404).json({
      status: 404,
      message: 'This is obviously not what you are looking for.',
    });
  })

  // Node spins up our server and sets it to listen on port 8000.
  .listen(8000, () => console.log(`Listening on port 8000`));
