const userModel = require("../models/clientModel");

const cloginController = async (req, res) => {
    try {
        const {email,password } = req.body;
        const user = await userModel.findOne({email, password });

        if (!user) {
            res.status(404).send(`User not found`)
        }
        res.status(200).json({
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



// Register USer
const cregisterController = async (req, res) => {
    try {
        const newUser = new userModel(req.body);
        await newUser.save();
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

module.exports = { cloginController, cregisterController }


