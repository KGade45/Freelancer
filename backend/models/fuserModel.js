const mongoose = require("mongoose");
const { Schema } = require("mongoose");


// schema design 
const userSchema = new mongoose.Schema({
    name:{
        type: String, 
        require:[true, "name is required"]
    },
    email:{
        type: String, 
        require:[true, "email is required"],
        unique: true
    },
    password:{
        type: String, 
        require:[true, "password is required"]
    }, 
    about: {
        type: Schema.Types.ObjectId,
        ref: 'fAboutModel', // Reference to the freelancerAbout model
    },
},
{timestamps:true}
)


const userModel = mongoose.model('freelancer', userSchema);
module.exports =  userModel;