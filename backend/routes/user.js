const router = require('express').Router();
const User = require("../models/User");

router.route("/").get((req,res)=>{
  User.find()
    .then(time=>res.json(time))
    .catch(err=>res.status(400).json("Error:" + err));
})

router.route('/getUser').get(async(req,res)=>{
  try {

    const l=await User.findOne({_id:req.query.id})

    console.log(l);

    if(!l)
    {
      return res.json("User not found")
    }

    res.json(l);

  } catch(err) {
    console.log(err);
    res.status(500).json("Server Error!!")
  }

})

// router.route('/find').post((req,res)=>{
//   Bookuser.findOne({email:req.body.email,password:req.body.password})
//   .then((response)=>{
//     res.json(response.data)
//   })
//   .catch(err=>res.json("User does not exist"));
// })

router.route('/find').post(async(req,res)=>{
  try {

    const u=await User.findOne({email:req.body.email})

    if(!u)
    {
      return res.json("Email does not exist")
    }

    console.log(u);

    if(u.password!==req.body.password)
    {
      return res.json("Password does not match")
    }

    //const up=await Bookuser.update({email:req.body.email},{$set:{isLoggedIn:true}})

    res.json(u);

  } catch(err){
    console.log(err);
    res.status(500).json("Server Error!!")
  }
})

router.route("/add").post((req,res)=>{
  //const u=req.body.email;
  const newuser=new User(req.body);

  newuser.save()
    .then(()=>res.json(newuser))
    .catch(err=>res.status(400).json("Error:" + err));
})

module.exports = router;
