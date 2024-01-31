const userModel = require("../models/fuserModel");
const jobModel = require("../models/jobModule");
const applicationModel = require("../models/applicationModel")
const bcrypt = require('bcrypt');

// Register USer
const fregisterController = async (req, res) => {
  try {
    console.log("controller ",req.body);
    const { name, email, password } = req.body;
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        error: "Email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword
    });

    // Avoid logging sensitive information in production
    console.log("New user registered:", { name, email });

    // Create a user object without the password field
    const userWithoutPassword = newUser.toObject();
    delete userWithoutPassword.password;

    res.status(201).json({
      success: true,
      newUser: userWithoutPassword,
      userid: newUser._id
    });

  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      success: false,
      error: "Internal server error"
    });
  }
};




const search = async (req, res) => {
  try {
    const query = req.body.title; // The attribute being searched, passed as a URL parameter

    // Perform a case-insensitive search using regular expressions
    const results = await jobModel.find({ title: { $regex: new RegExp(query, 'i') } });
    console.log(results);
    res.status(200).json(results); // Return the search results to the client
  } catch (error) {
    console.error('Error in searchAttribute controller:', error);
    res.status(500).json({ error });
  }
};



const applyForJob = async (req, res) => {
  try {
    const { jobId, freelancerId } = req.body;

    // Find the job post by ID
    const jobPost = await jobModel.findById(jobId);

    // Check if the job post exists
    if (!jobPost) {
      return res.status(404).json({ success: false, message: 'Job post not found' });
    }

    // Check if the freelancer exists
    const freelancer = await userModel.findById(freelancerId);
    if (!freelancer) {
      return res.status(404).json({ success: false, message: 'Freelancer not found' });
    }

    // Create an application object
    const application = {
      jobId: jobId,
      freelancerId: freelancerId,
      status: 'Pending' // You can set an initial status for the application
    };

    // Save the application in the database
    const savedApplication = await applicationModel.create(application);

    res.status(201).json({ success: true, message: 'Application submitted successfully' });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

const getInfo = async (req, res) => {
  try {
    const userId = req.body.userid;

    const userInfo = await userModel
      .findById(userId)
      .populate({
        path: 'about', // Populate the 'about' field, which is a reference to the freelancerAbout model
        select: 'domain skills', // Select the fields you want to retrieve
      })
      .select('name'); // Select the 'name' field from the userModel

    res.status(201).json(userInfo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllJobs = async(req, res)=>{
  try {
    const allRecords = await jobModel.find();
    res.json(allRecords);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Not found' });
  }
}


module.exports = { fregisterController, search, applyForJob, getInfo, getAllJobs }
