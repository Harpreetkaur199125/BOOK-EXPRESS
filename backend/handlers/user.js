const { MongoClient } = require('mongodb');

require('dotenv').config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// get a user
const getUser = async (req, res) => {
  const userId = req.params.id;
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db('bookwish');
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

// update a user
const updateUser = async (req, res) => {
  const userId = req.params.id;
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db('bookwish');
    const result = await db
      .collection('books')
      .findOneAndUpdate({ _id: userId });

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

// delete a user
const deleteUser = async (req, res) => {
  const userId = req.params.id;
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db('bookwish');
    const result = await db
      .collection('books')
      .findOneAndDelete({ _id: userId });

    res.status(200).json({
      status: 200,
      deletedBook: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, message: error.message });
  }
  client.close();
};

module.exports = {
  getUser,
  updateUser,
  deleteUser,
};
