const userModel = require("../models/fuserModel").default;
const jobModel = require("../models/jobModule");
const applicationModel = require("../models/applicationModel")
const bcrypt = require('bcrypt');

// const floginController = async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const user = await userModel.findOne({ email, password });

//         if (!user) {
//             res.status(404).send(`User not found`)
//         }
//         res.status(200).json({
//             success: true,
//             // user
//         });


//     } catch (error) {
//         res.status(400).json({
//             success: false,
//             error
//         })
//     }
// }



// Register USer
const fregisterController = async (req, res) => {
  try {
    // const newUser = new userModel(req.body);
    // await newUser.save();
    const { name, email, password } = req.body;
    // Check if the email already exists in the database
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      // If the email already exists, return an error response
      return res.status(409).json({
        success: false,
        error: "Email already exists",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(name, email, hashedPassword);
    // const user = await userModel.create({
    //   name,
    //   email,
    //   password: hashedPassword
    // });
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword
    })
    delete (await newUser).password
    res.status(201).json({
      success: true,
      newUser
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      error
    })
  }
}



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
    const userId = req.body.userid; // Assuming the user ID is sent in the request body

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
