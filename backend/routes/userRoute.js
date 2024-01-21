import { Router } from "express";
import { fregisterController, search, applyForJob, getInfo, getAllJobs } from "../controllers/fuserController";
import { register } from "../controllers/userAboutClt";

// router Object

const router = Router();

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

//GET || INFO
router.post("/getInfo", getInfo);

//GET || INFO
router.post("/getalljobs", getAllJobs);


export default router;