const clientModel = require("../models/clientModel");
const jobModel = require("../models/jobModule");
const Application = require('../models/applicationModel');
const About = require('../models/fAboutModel');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose')

// const cloginController = async (req, res) => {
//     try {
//         const {email,password } = req.body;
//         const user = await clientModel.findOne({email, password });

//         if (!user) {
//             res.status(404).send(`User not found`)
//         }
//         res.status(200).json({
//             success: true,
//             user
//         });

//     } catch (error) {
//         res.status(400).json({
//             success: false,
//             error
//         })
//     }
// }



// Register USer
const cregisterController = async (req, res) => {
    try {
        // const newUser = new clientModel(req.body);
        const { name, email, password, company, contactNumber } = req.body;
        // console.log(password);

        const existingUser = await clientModel.findOne({ email });
        if (existingUser) {
            // If the email already exists, return an error response
            return res.status(409).json({
                success: false,
                error: "Email already exists",
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        // console.log(hashedPassword);
        const user = await clientModel.create({
            name,
            email,
            password: hashedPassword,
            company,
            contactNumber,
        });
        delete user.password;
        // await newUser.save();
        res.status(201).json({
            success: true,
            user
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            error
        })
    }
}




const editInfo = async (req, res) => {
    try {
        await clientModel.findOneAndUpdate({ _id: req.body.clientId }, req.body.payload);
        res.status(200).send("Edited Successfully..!")
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}


const postJob = async (req, res) => {
    try {
        const newJob = new jobModel(req.body);
        await newJob.save();
        res.status(201).json({
            success: true,
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            error
        })
    }
}

const drafts = async (req, res) => {
    const clientId = req.body.clientId;
    // console.log(clientId);
    // const validClientId = mongoose.Types.ObjectId.createFromHexString(clientId);
    try {
        // Retrieve jobs from the database based on the client ID
        const jobs = await jobModel.find({ clientId: clientId });
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
        // console.log(error);
    }
};


const getApplicantsForJob = async (req, res) => {
    try {
        const jobId = req.query.jobId;

        // Find all applications with the given jobId
        const applications = await Application.find({ jobId: jobId }).select('freelancerId');

        // Extract an array of freelancerIds from the applications
        const freelancerIds = applications.map(application => application.freelancerId);

        // Find all freelancers with the extracted freelancerIds
        const freelancers = await About.find({ userid: { $in: freelancerIds } })
            .select('userid domain skills education experience portFolio charges');

        // Combine the applications and freelancers based on the freelancerId
        const applicants = applications.map(application => {
            const freelancer = freelancers.find(freelancer => freelancer._id.equals(application.freelancerId));
            return {
                jobId: application.jobId,
                freelancerId: freelancer.userid,
                domain: freelancer.domain,
                skills: freelancer.skills,
                education: freelancer.education,
                experience: freelancer.experience,
                portFolio: freelancer.portFolio,
                charges: freelancer.charges,
                status: application.status
            };
        });

        res.status(200).json(applicants);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};




module.exports = { cregisterController, editInfo, postJob, drafts, getApplicantsForJob }