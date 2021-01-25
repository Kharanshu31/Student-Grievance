const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const path = require('path');
const connectDB=require("./config/db");

const app=express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// connect database
connectDB();

const userrouter=require('./routes/user')
app.use("/users",userrouter);

const port=process.env.PORT || 5000;

app.listen(port,()=>console.log(`Server is running at ${port}`));
