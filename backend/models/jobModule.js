const mongoose = require("mongoose");

// schema design 
const jobSchema = new mongoose.Schema({
    clientId:{
        type: mongoose.Schema.Types.ObjectId,
        required:[true,"Id is must"]
    },
    title:{
        type: String, 
        require:[true, "title is required"]
    },
    skills:{
        type: [String], 
        require:[true, "skills are required"],
        unique: true
    },
    duration:{
        type: String, 
        require:[true, "duration is required"]
    },
    rate:{
        type: Number, 
        require:[true, "rate is required"]
    },
    description:{
        type: String, 
        require:[true, "description is required"]
    },
},
{timestamps:true}
)


const jobModel = mongoose.model('job', jobSchema);
module.exports =  jobModel;