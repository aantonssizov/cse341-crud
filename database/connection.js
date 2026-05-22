const MongoClient = require("mongodb").MongoClient;
const env = require("dotenv").config();
const connectionString = process.env.MONGO_CONNECTION_STRING || "";
const client = new MongoClient(connectionString);

async function connectToDb() {
  let connection;

  try {
    connection = await client.connect();
  } catch (e) {
    console.error(e);
  }

  return connection.db("crud");
}

module.exports = connectToDb();
