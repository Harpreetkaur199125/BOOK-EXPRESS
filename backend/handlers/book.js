const { MongoClient } = require('mongodb');

require('dotenv').config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// get all books
const getBooks = async (req, res) => {
  const author = req.query.author;
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db('bookwish');

    const result = author
      ? await db
          .collection('books')
          .find({ author: author })
          .collation({ locale: 'en', strength: 2 })
          .toArray()
      : await db.collection('books').find().toArray();

    res.status(200).json({
      status: 200,
      books: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, message: error.message });
  }
  client.close();
};

// get a book
const getBook = async (req, res) => {
  const bookId = req.params.id;
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db('bookwish');
    const result = await db.collection('books').findOne({ _id: bookId });

    res.status(200).json({
      status: 200,
      book: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, message: error.message });
  }
  client.close();
};

// create a book
const createBook = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db('bookwish');

    console.log(req.body);
    // const result = await db.collection('books').insertOne({  });

    res.status(200).json({
      status: 200,
      book: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, message: error.message });
  }
  client.close();
};

// update a book
const updateBook = async (req, res) => {
  const bookId = req.params.id;
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db('bookwish');
    // todo
    const result = await db
      .collection('books')
      .findOneAndUpdate({ _id: bookId });

    res.status(200).json({
      status: 200,
      updatedBook: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, message: error.message });
  }
  client.close();
};

// delete a book
const deleteBook = async (req, res) => {
  const bookId = req.params.id;
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db('bookwish');
    const result = await db
      .collection('books')
      .findOneAndDelete({ _id: bookId });

    res.status(200).json({
      status: 200,
      updatedBook: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, message: error.message });
  }
  client.close();
};

// wishlist a book

// subscribe a book

module.exports = {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
};
