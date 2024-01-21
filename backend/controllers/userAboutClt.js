const aboutModel = require( "../models/fAboutModel");


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
        const userId = req.body.userId;
        const { domain, skills, education, experience, portFolio, charges } = req.body;
        const newUser = new aboutModel({
            userId,
            domain,
            skills,
            education,
            experience,
            portFolio,
            charges
        })
        res.status(201).json({
            success: true,
            newUser
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error
        })
    }
}

module.exports =  { edituser, register };




