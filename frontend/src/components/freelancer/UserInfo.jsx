import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserInfo() {
    const [skills, setSkills] = useState([]);
    const [domain, setDomain] = useState("");
    const [userName, setUserName] = useState("");

    useEffect(() => {
        const getInfo = async () => {
            const user = JSON.parse(localStorage.getItem('user'));
            try {
                const res = await axios.get("/users/getInfo", {
                    data: { userid: user._id }
                });

                setUserName(res.data.name);
                setDomain(res.data.domain);
                setSkills((prev) => [...prev, ...res.data.skills]);

            } catch (error) {
                console.error("Error fetching user info:", error);
            }

        }

        getInfo();

    }, [])

    return (
        <div className="fixed right-0 top-0 bottom-0 bg-white bg-opacity-50 w-1/4 p-8 flex items-center justify-center">
            <div className="absolute w-10/12 top-5 bg-gray-200 p-8 rounded-md">
                <div className="flex flex-col items-center">
                    <img
                        src="path_to_profile_image.jpg"
                        alt="Profile"
                        className="w-20 h-20 rounded-full mb-4"
                    />
                    <h2 className="text-xl font-semibold">
                        {userName}
                    </h2>
                    <p className="text-gray-500">
                        {domain}
                    </p>
                </div>
                {skills.length > 0 ? (
                    <div className="mt-8">
                        <div className="mb-2">
                            <h4 className="text-md font-semibold">Skills</h4>
                        </div>
                        <div className="flex flex-wrap">
                            {skills.map((skill, i) => (
                                <span key={i} className="bg-gray-300 rounded-full px-3 py-1 text-sm mr-2 mb-2">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default UserInfo;
