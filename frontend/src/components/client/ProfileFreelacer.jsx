import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProfileFreelancer = () => {
    const { id } = useParams();
    const [freelancerDetails, setFreelancerDetails] = useState(null);

    useEffect(() => {
        // Simulating data fetching. Replace this with your actual data fetching logic.
        const fetchData = async () => {
            // Replace the following line with your actual data fetching logic
            // For example, using an API call or fetching from a local data source
            const data = await fetchFreelancerDetails(id);
            setFreelancerDetails(data);
        };

        fetchData();
    }, [id]);

    if (!freelancerDetails) {
        return <div>Loading...</div>; // You can replace this with a loading spinner or message
    }

    return (
        <div className="container mx-auto mt-8">
            <div className="bg-white p-8 rounded-md shadow-md">
                <h2 className="text-3xl font-bold mb-4">{freelancerDetails.name}</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h4 className="text-lg font-semibold mb-2">Skills</h4>
                        <div className="flex flex-wrap">
                            {freelancerDetails.skills.map((skill, index) => (
                                <span key={index} className="bg-gray-200 rounded-full px-3 py-1 text-sm mr-2 mb-2">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-2">Domain</h4>
                        <p>{freelancerDetails.domain}</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-2">Price</h4>
                        <p>${freelancerDetails.charges}</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-2">Experience</h4>
                        <p>{freelancerDetails.experience}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Replace this with your actual data fetching logic
const fetchFreelancerDetails = async (id) => {
    // Example data for illustration purposes
    return {
        name: 'John Doe',
        skills: ['React', 'JavaScript', 'Node.js'],
        domain: 'Web Development',
        charges: 50,
        experience: '5 years',
    };
};

export default ProfileFreelancer;
