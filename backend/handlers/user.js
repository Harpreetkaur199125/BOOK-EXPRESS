const { MongoClient } = require('mongodb');

require('dotenv').config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getUser = async (req, res) => {
  const userId = req.params.id;
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db('bookexpress');
    const result = await db.collection('users').findOne({ _id: userId });

    res.status(200).json({
      status: 200,
      user: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, message: error.message });
  }
  client.close();
};

const getUserWishList = async (req, res) => {
  const userId = req.params.id;
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db('bookexpress');
    const result = await db.collection('books').find().toArray();

    const books = result.filter((book) => book.wishListedBy.includes(userId));

    res.status(200).json({
      status: 200,
      wishlist: books,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, message: error.message });
  }
  client.close();
};

const getUserSubscribedList = async (req, res) => {
  const userId = req.params.id;
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db('bookexpress');
    const result = await db.collection('books').find().toArray();

    const books = result.filter((book) => book.subscribedBy.includes(userId));

    res.status(200).json({
      status: 200,
      subscribedList: books,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, message: error.message });
  }
  client.close();
};

module.exports = { getUser, getUserWishList, getUserSubscribedList };
