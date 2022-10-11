const { MongoClient } = require('mongodb');

require('dotenv').config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

console.log(MONGO_URI);

const { users, books } = require('./data');
// This is the function to store all the data
const batchImport = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db('bookexpress');
    // console.log(users, books);
    const usersInserted = await db.collection('users').insertMany(users);
    const bookesInserted = await db.collection('books').insertMany(books);
    console.log(usersInserted, bookesInserted);
  } catch (err) {
    console.log(err.stack);
    console.log('error!');
  }
  client.close();
};

batchImport();
