import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FreelancerCard from './FreelancerCard';

function UserHome() {
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
                <h2 className="text-xl mb-2 font-medium">Freelancers around the globe</h2>
                <div className="flex flex-col items-center" >
                    {freelancers.map((freelancer) => (
                        <FreelancerCard key={freelancer._id} freelancer={freelancer} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default UserHome;