const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

const Complaint=require('../../models/complaint');


router.get('/', auth, async (req,res)=>{
    try {
        const complaints=await Complaint.find({user:req.user.id});
        if(complaints.isEmpty()){
            return res.json({msg:'No Grievance Posted Yet!'});
        }
        res.status(200).json(complaints);

    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error!');
    }

});


router.get('/:id',auth,async (req,res)=>{
    try {
        const complaint=await Complaint.findById(req.params.id);
        if(!complaint){
            return res.status(404).json({msg:'No such grievance found!'});
        }
        res.status(200).json(complaint);
    } catch (error) {
        if(error.kind==='ObjectId'){
            return res.status(404).json({msg:'No such grievance found!'});
            
        }
        console.log(error.message);
        res.status(500).send('Server Error!');
    }
});



router.post('/',[auth,
    check('title','Title is required!').not().isEmpty(),
    check('description','Description is required!').not().isEmpty(),
    check('department','Department is required!').not().isEmpty(),
    check('university','University is required!').not().isEmpty(),
    check('college','College is required!').not().isEmpty(),
    check('issue','Issue is required!').not().isEmpty()
], async(req,res)=>{
    const errors =validationResult(req);
   if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
   }
   try {
       const newGrivance=new Complaint({
           user:req.user.id,
           title:req.body.title,
           description:req.body.description,
           department:req.body.department,
           college:req.body.college,
           university:req.body.university,
           issue:req.body.issue
       });
    
       const complaint=await newGrivance.save();
       res.json(complaint);
   } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error!');
   }
});

module.exports=router;