import React from 'react'

function CompInfo() {
    const [userName, setUserName] = useState("");
    const [company, setCompany] = useState("");
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const getInfo = async () => {
            const user = JSON.parse(localStorage.getItem('user'));
            try {
                const res = await axios.get("/client/getInfo", {
                    data: { userid: user._id }
                });

                setUserName(res.data.name);
                setCompany(res.data.company);
                setJobs((prevJobs) => [...prevJobs, ...res.data.jobs]);

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
                        {company}
                    </p>
                </div>
                {jobs.length > 0 ? (
                    <div className="mt-8">
                        <div className="mb-2">
                            <h4 className="text-md font-semibold">Posted Jobs</h4>
                        </div>
                        <div className="flex flex-wrap">
                            {jobs.map((job, i) => (
                                <span key={i} className="bg-gray-300 rounded-full px-3 py-1 text-sm mr-2 mb-2">
                                    {job.title}
                                </span>
                            ))}
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default CompInfo