const express = require("express");
const { cregisterController,postJob, drafts, getApplicantsForJob } = require("../controllers/clientController");

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

module.exports = router;