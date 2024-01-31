const express = require("express");
const { cregisterController,postJob, drafts, getApplicantsForJob, getAllFreelancers, getInfo } = require("../controllers/clientController");

// router Object

const router = express.Router();

// routers
// POST || LOGIN
// router.post('/login', cloginController);

// POST || REGISTER
router.post('/register', cregisterController);

//POST || POSTJOB
router.post('/postjob',postJob);

//POST || HOMEPAGE POSTED JOBS
router.post('/clientHome',drafts);

//GET || APPLICANTS
router.get('/applicants', getApplicantsForJob)

//GET || INFO
router.get("/getallfreelancers", getAllFreelancers);

//GET || INFO
router.get("/getInfo", getInfo);


module.exports = router;