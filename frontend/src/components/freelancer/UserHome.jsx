import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JobCard from '../JobCard';

function UserHome() {
    const [searchQuery, setSearchQuery] = useState('');
    const [jobs, setJobs] = useState([]);


    const fetchJobs = async () => {
        try {
            const res = await axios.get('/users/getalljobs');
            setJobs(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSearch = async () => {
        try {
            const response = await axios.post('/api/v1/users/search', {
                title: searchQuery,
            });
            setJobs(response.data || []);
        } catch (error) {
            console.error('Error searching jobs:', error);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    useEffect(() => {
        // Fetch all jobs initially
        if (searchQuery === '') {
            fetchJobs();
        }

    }, [searchQuery]);

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
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
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
