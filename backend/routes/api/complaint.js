const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

const Complaint=require('../../models/complaint');



router.delete('/:id',auth, async(req,res)=>{
    try {
        const complaint=await Complaint.findById(req.params.id);
        if(!complaint){
            return res.status(404).json({msg:'No such grievance found!'});
        }
        await complaint.remove();
        res.json({msg:'Complaint Deleted'})
    } catch (error) {
        if(error.kind==='ObjectId'){
            return res.status(404).json({msg:'No such grievance found!'});
        }
        console.log(error.message);
        res.status(500).send('Server Error!');
    }
})


router.get('/', auth, async (req,res)=>{
    try {
        const complaints=await Complaint.find({user:req.user.id});
        if(!complaints){
            return res.json([]);
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
    check('complaint','Complaint is required!').not().isEmpty(),
    check('department','Department is required!').not().isEmpty(),
    check('priority','Priority is required!').not().isEmpty(),
    check('college','College is required!').not().isEmpty()

], async(req,res)=>{
    const errors =validationResult(req);
   if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
   }
   try {
       const newGrivance=new Complaint({
           user:req.user.id,
           title:req.body.title,
           description:req.body.complaint,
           department:req.body.department,
           college:req.body.college,
           priority:req.body.priority,
           status:false

       });

       const complaint=await newGrivance.save();
       res.json(complaint);
   } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error!');
   }
});




module.exports=router;
