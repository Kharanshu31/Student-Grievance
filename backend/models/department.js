const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DepartmentSchema = new Schema(
  {

    department:{
        type:String
    }
  }
);

const Department = mongoose.model("Department", DepartmentSchema);

module.exports =Department;
