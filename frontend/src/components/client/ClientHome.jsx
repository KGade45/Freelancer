import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Freelancer from './FreelancerCard';

function UserHome() {
    const [searchQuery, setSearchQuery] = useState('');
    const [freelancers, setFreelancers] = useState([]);


    const fetchFreelancers = async () => {
        try {
            const res = await axios.get('/client/getallfreelancers');
            setFreelancers(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(()=>{
        fetchFreelancers();
    },[])

    



    return (
        <div className="absolute left-0 w-3/4 top-0 h-full p-20 mx-5 mb-5">
            {/* Greeting */}
            <div className="mb-14 text-left">
                <h1 className="text-3xl font-bold font-serif">Hi, User 👋</h1>
            </div>


            {/* Posted Jobs */}
            <div className="text-sm text-left">
                <h2 className="text-xl mb-2 font-medium">Jobs recommended for you</h2>
                <div className="flex justify-center">
                    {freelancers.map((freelancer) => (
                        <FreelancerCard key={job._id} job={job} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default UserHome;
