const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const Department = require("../../models/department");

router.get("/", auth, async (req, res) => {
  try {
    const departments = await Department.find();
    console.log("DEPARTMENTS", departments);
    if (!departments) {
      return res.json(["1"]);
    }
    res.status(200).json(departments);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error!");
  }
});

router.post("/", auth, async (req, res) => {
  try {
    console.log("REQ BODY $$$$", req.body);
    const newDepartment = new Department({
      department: req.body.department,
    });

    const department = await newDepartment.save();
    console.log("DEPARTMENT", department);
    res.json(department.department);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error!");
  }
});

module.exports = router;
