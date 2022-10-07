'use strict';

// import the needed node_modules.
const dotenv = require('dotenv');
const express = require('express');
const morgan = require('morgan');
const { login, signup } = require('./handlers/auth');
const {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
} = require('./handlers/book');
const { getUser, updateUser, deleteUser } = require('./handlers/user');

dotenv.config();

// import handlers

express()
  .use(morgan('tiny'))
  .use(express.json())

  // define routes
  .get('/api/books', getBooks)
  .get('/api/books/:id', getBook)
  .post('/api/books', createBook)
  .patch('/api/books', updateBook)
  .delete('/api/books', deleteBook)

  // auth routes
  .post('/api/login', login)
  .post('/api/signup', signup)

  // user routes
  .get('/api/users/:id', getUser)
  .patch('/api/users/:id', updateUser)
  .delete('/api/users/:id', deleteUser)

  .get('*', (req, res) => {
    res.status(404).json({
      status: 404,
      message: 'This is obviously not what you are looking for.',
    });
  })

  // Node spins up our server and sets it to listen on port 8000.
  .listen(8000, () => console.log(`Listening on port 8000`));
