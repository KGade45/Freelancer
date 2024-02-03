const express = require("express");
const { fregisterController,search, applyForJob, getAllJobs, getInfo } = require("../controllers/fuserController");
const { register } = require("../controllers/userAboutClt");

// router Object

const router = express.Router();

// routers
// POST || LOGIN
// router.post('/login', floginController);

// POST || REGISTER
router.post('/register', fregisterController);

//POST || ABOUT
router.post('/about', register)

//POST || SEACRH
router.post('/search', search);

//POST || APPLY
router.post("/apply",applyForJob);

//POST || INFO
router.post("/getinfo",getInfo);

//GET || INFO
router.get("/getalljobs", getAllJobs);


module.exports = router;