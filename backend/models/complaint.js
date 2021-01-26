const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ComplaintSchema = new Schema(
  {

    user:{
        type:Schema.Types.ObjectId
    },
    
    description:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    university:{
        type:String,
        required:true
    },
    college:{
        type:String,
        required:true
    },
    status:{
        type:Boolean
    }
  },
  {
    timestamps: true,
  }
);

const Complaint = mongoose.model("Complaint", ComplaintSchema);

module.exports =Complaint;
