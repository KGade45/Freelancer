const aboutModel = require( "../models/fAboutModel");
const userModel = require("../models/fuserModel");

const edituser = async (req, res) => {
    try {
        await aboutModel.findOneAndUpdate({ _id: req.body.clientId }, req.body.payload);
        res.status(200).send("Edited Successfully..!")
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const register = async (req, res) => {
    try {
        const { userid, domain, skills, education, experience, portFolio, charges } = req.body;

        const skillsArray = skills.split(',').map(skill => skill.trim());

        const newAbout = new aboutModel({
            userid,
            domain,
            skills : skillsArray,
            education,
            experience,
            portFolio,
            charges,
        });
        await newAbout.save();

        // Update the user with a reference to the additional details
        const updatedUser = await userModel.findByIdAndUpdate(
            userid,
            { about: newAbout._id }
        );

        res.status(201).json({
            success: true,
            updatedUser,
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            error,
        });
    }
}

module.exports =  { edituser, register };




