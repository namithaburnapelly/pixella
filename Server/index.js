const express = require("express");
const cors = require("cors");
const { connectDB } = require("./db");

//configure env to env data from file

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

const port = 4000;
app.listen(port, () => console.log(`Server started at port ${port}`));
