const userModel = require("../models/fuserModel");
const clientModel = require("../models/clientModel");
const bcrypt = require('bcrypt')

const loginController = async (req, res) => {

  try {
    // console.log(req.body);
    const { email, password } =  req.body;
    let user;
    // console.log(email)
    // console.log(password)

    // Search for the user in the clientModel collection
    user = await clientModel.findOne({ email });

    // If the user is not found, search in the freelancerModel collection
    if (!user) {
      user = await userModel.findOne({ email });
    }

    if (!user) {
      console.log('not found')
      return res.status(404).send("User not found");
    }

    const isPasswordValid = bcrypt.compare(password, user.password);
    if(!isPasswordValid){
      return res.status(400).json({
        message: 'invalid password',
        success: false,
        error,
      });
    }
    delete user.password;


    // Determine the role based on the collection the user was found in
    const role = user instanceof clientModel ? "client" : "freelancer";
    console.log("role ",role)
    res.status(200).json({
      success: true,
      user,
      role,
    });
  } catch (error) {
    console.log(error)
    res.status(400).json({
      success: false,
      error,
    });
  }
};
module.exports = loginController;
