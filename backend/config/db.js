const mongoose = require("mongoose");

require('dotenv').config();

const db="mongodb+srv://admin123:test123@cluster0.tpxxr.mongodb.net/student_grievance?retryWrites=true&w=majority";

const connectDB = async () =>{
  try {
    await mongoose.connect(db,{
       useNewUrlParser: true,
       useUnifiedTopology: true,
       useCreateIndex:true,
       useFindAndModify:false
    });

    console.log("Mongodb connected");
  } catch(err) {
    console.log(err.message);

    //Exit process with Failure
    process.exit(1);
  }
}

module.exports = connectDB;
