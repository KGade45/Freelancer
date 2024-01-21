import { Schema, model } from "mongoose";

// schema design 
const userSchema = new Schema({
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
        ref: 'freelancerAbout', // Reference to the freelancerAbout model
    },
},
{timestamps:true}
)


const userModel = model('freelancer', userSchema);
export default  userModel;