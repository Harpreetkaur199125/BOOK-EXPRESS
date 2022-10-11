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
  const cat = req.query.category;
  const search = req.query.search;

  console.log('Cat: ', cat);
  console.log('search: ', search);
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db('bookexpress');

    let result = [];

    if (author) {
      result = await db
        .collection('books')
        .find({ author: author })
        .collation({ locale: 'en', strength: 2 })
        .toArray();
    } else if (cat) {
      console.log('here...');
      result = await db
        .collection('books')
        .find({category: {$elemMatch: {category:cat}}})
        .collation({ locale: 'en', strength: 2 })
        .toArray();
    } else if (search) {
      result = await db
        .collection('books')
        .find({ title: search })
        .collation({ locale: 'en', strength: 2 })
        .toArray();
    } else {
      result = await db.collection('books').find().toArray();
    }

    console.log(result);

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
    const db = client.db('bookexpress');
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
    const db = client.db('bookexpress');

    const result = await db.collection('books').insertOne(req.body);

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
    const db = client.db('bookexpress');
    // todo
    const result = await db
      .collection('books')
      .findOneAndUpdate({ _id: bookId }, { $set: req.body });

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
    const db = client.db('bookexpress');
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
const wishlistBook = async (req, res) => {
  const bookId = req.params.id;
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db('bookexpress');

    const result = await db
      .collection('books')
      .findOneAndUpdate(
        { _id: bookId },
        { $push: { wishListedBy: req.body.userId } }
      );

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

// subscribe a book
const subscribeBook = async (req, res) => {
  const bookId = req.params.id;
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db('bookexpress');

    const result = await db
      .collection('books')
      .findOneAndUpdate(
        { _id: bookId },
        { $push: { subscribedBy: req.body.userId } }
      );

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

module.exports = {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
  wishlistBook,
  subscribeBook,
};
