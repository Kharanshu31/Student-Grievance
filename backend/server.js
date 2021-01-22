const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const path = require('path');

const app=express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

const port=process.env.PORT || 5000;

app.listen(port,()=>console.log(`Server is running at ${port}`));
