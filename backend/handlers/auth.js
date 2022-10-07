const { MongoClient } = require('mongodb');

require('dotenv').config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const login = async (req, res) => {};

const signup = async (req, res) => {};

module.exports = { login, signup };
