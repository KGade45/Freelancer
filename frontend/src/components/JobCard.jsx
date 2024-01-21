import React from 'react';

const JobCard = ({ job }) => {
    return (
        <div className="bg-white p-6 rounded-md shadow-md mb-4 w-full transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gray-100">
            <h2 className="text-2xl font-bold mb-2">{job.title}</h2>

            <div className="mb-2">
                <h4 className="text-md font-semibold">Skills Required</h4>
                <div className="flex flex-wrap">
                    {job.skills.map((skill, index) => (
                        <span
                            key={index}
                            className="bg-gray-300 rounded-full px-3 py-1 text-sm mr-2 mb-2"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            <div className="mb-2">
                <h4 className="text-md font-semibold">Duration</h4>
                <p>{job.duration}</p>
            </div>

            <div className="mb-2">
                <h4 className="text-md font-semibold">Price</h4>
                <p>${job.price}</p>
            </div>

            <div>
                <h4 className="text-md font-semibold">Description</h4>
                <p>{job.description}</p>
            </div>
        </div>
    );
};

export default JobCard;
