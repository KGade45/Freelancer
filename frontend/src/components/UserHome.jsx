import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';
import axios from 'axios';


function UserHome() {
    const jobInfo = {
        title: 'Web Developer',
        skills: ['React', 'Node.js', 'CSS'],
        duration: '3 months',
        price: 5000,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
    };

    const [jobs, setJobs] = useState([]);


    useEffect(() => {


        const getAllJobs = async () => {
            try {
                const res = await axios.get("/users/getalljobs")
                setJobs(res.data)
            } catch (error) {
                console.error(error);
            }
        }

        getAllJobs();
    }, [])


    return (
        <div className="absolute left-0 w-3/4 top-0 h-full p-20 mx-5 mb-5">
            {/* Greeting */}
            <div className="mb-14 text-left">
                <h1 className="text-3xl font-bold font-serif">Hi, User 👋</h1>
            </div>

            {/* Search Bar */}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full p-2 border border-gray-300 rounded-full"
                />
            </div>

            {/* Posted Jobs */}
            <div className="text-sm text-left">
                <h2 className="text-xl mb-2 font-medium">Jobs recommended for you</h2>
                <div className="flex justify-center">
                    {jobs.map((job) => (
                        <JobCard key={job._id} job={job} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default UserHome;
