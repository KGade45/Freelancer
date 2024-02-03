import { useNavigate } from 'react-router-dom';
import React from 'react';

const FreelancerCard = ({ freelancer }) => {
    // console.log(freelancer);
    const navigate = useNavigate();

    // Function to render skills with a limit
    const renderSkills = () => {
        const skills = freelancer.about.skills || [];
    const maxSkillsToShow = 3;

    if (skills.length <= maxSkillsToShow) {
        return skills.map((skill, index) => (
            <span key={index} className="bg-gray-200 rounded-full px-3 py-1 text-sm mr-2 mb-2 inline-flex items-center">
                {skill}
            </span>
        ));
    } else {
            return (
                <>
                    {skills.slice(0, maxSkillsToShow).map((skill, index) => (
                        <span key={index} className="bg-gray-200 rounded-full px-3 py-1 text-sm mr-2 mb-2">
                            {skill}
                        </span>
                    ))}
                    <span className="text-blue-500 mt-1">+{skills.length - maxSkillsToShow} more</span>
                </>
            );
        }
    };

    const hanndleClick = (id) =>{
        navigate(`/freelancer/${freelancer._id}`)
    }
    

    return (
        <div onClick={hanndleClick} className="bg-white p-6 rounded-md shadow-md mb-4 w-full transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gray-100 cursor-pointer">
            <h2 className="text-2xl font-bold mb-2">{freelancer.name}</h2>
            {freelancer.about ?
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <div className="mb-2">
                            <h4 className="text-md font-semibold">Skills</h4>
                            <div className="flex flex-wrap content-center text-center p-2">
                                {renderSkills()}
                            </div>
                        </div>
                        <div className="mb-2">
                            <h4 className="text-md font-semibold">Domain</h4>
                            <p>{freelancer.about.domain}</p>
                        </div>
                    </div>
                    <div>
                        <div className="mb-2">
                            <h4 className="text-md font-semibold">Price</h4>
                            <p>${freelancer.about.charges}</p>
                        </div>
                        <div>
                            <h4 className="text-md font-semibold">Experience</h4>
                            <p>{freelancer.about.experience}</p>
                        </div>
                    </div>
                </div>
                : null}
        </div>
    );
};

export default FreelancerCard;
