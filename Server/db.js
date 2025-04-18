// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     const uri = process.env.MONGO_URI;
//     await mongoose.connect(uri);
//     console.log("Connected to database");
//   } catch (err) {
//     console.log("Error connecting to database", err.message);
//     process.exit(1);
//   }
// };

// module.exports = { connectDB };

const { MongoClient, ServerApiVersion } = require("mongodb");

const dotenv = require("dotenv");
dotenv.config();


const uri = process.env.MONGO_URI;
console.log(uri);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const connectDB = async () => {
  try {
    // Connect the client to the server
    await client.connect();
    db = client.db("Pixella");
    console.log("Connected to database");
  } catch (err) {
    console.log("Error connectiong to database", err.message);
    process.exit(1);
  }
};

module.exports = { connectDB };
