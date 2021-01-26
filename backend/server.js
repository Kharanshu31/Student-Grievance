const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

const app = express();

// Init middleware
app.use(bodyParser.json({ extended: false }));
app.use(cors());
app.use(express.json());

// connect database
connectDB();

// const userrouter=require('./routes/user')
// app.use("/users",userrouter);

// Define routes
app.use("/api/users", require("./routes/api/user"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/complaint", require("./routes/api/complaint"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running at ${port}`));
