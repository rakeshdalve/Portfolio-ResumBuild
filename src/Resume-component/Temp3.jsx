import React, { useState } from 'react'

export default function Temp3({ onSubmitForm }) {
    const [formData, setFormData] = useState({
        Experience: [],
        Projects: [],
        Certificates: [],
    });

    const addExperience = () => {
        setFormData((prev) => ({
            ...prev,
            Experience: [
                ...prev.Experience,
                { Organization: '', Role: '', Duration: '', Duration2: '' },
            ],
        }));
    };

    const handleExperienceChange = (index, e) => {
        const { name, value } = e.target;
        const updatedExperience = [...formData.Experience];
        updatedExperience[index] = {
            ...updatedExperience[index],
            [name]: value,
        };
        setFormData((prev) => ({
            ...prev,
            Experience: updatedExperience,
        }));
    };

    const removeExperience = (indexToRemove) => {
        setFormData((prev) => ({
            ...prev,
            Experience: prev.Experience.filter((_, index) => index !== indexToRemove),
        }));
    };

    const addProject = () => {
        setFormData((prev) => ({
            ...prev,
            Projects: [
                ...prev.Projects,
                { ProjectsName: '', Technologies: '', Description: '',},
            ],
        }));
    };

    const handleProjectChange = (index, e) => {
        const { name, value } = e.target;
        const updatedProjects = [...formData.Projects];
        updatedProjects[index] = {
            ...updatedProjects[index],
            [name]: value,
        };
        setFormData((prev) => ({
            ...prev,
            Projects: updatedProjects,
        }));
    };

    const removeProject = (indexToRemove) => {
        setFormData((prev) => ({
            ...prev,
            Projects: prev.Projects.filter((_, index) => index !== indexToRemove),
        }));
    };

    const addCertificates = () => {
        setFormData((prev) => ({
            ...prev,
            Certificates: [
                ...prev.Certificates,
                { Organization: '', CertificateOF: '', Month: '',},
            ],
        }));
    };

    const handleCertificatesChange = (index, e) => {
        const { name, value } = e.target;
        const updatedCertificates = [...formData.Certificates];
        updatedCertificates[index] = {
            ...updatedCertificates[index],
            [name]: value,
        };
        setFormData((prev) => ({
            ...prev,
            Certificates: updatedCertificates,
        }));
    };

    const removeCertificates = (indexToRemove) => {
        setFormData((prev) => ({
            ...prev,
            Certificates: prev.Certificates.filter((_, index) => index !== indexToRemove),
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitForm(formData);
    };

    return (
        <>
            <div className='h-screen overflow-auto w-screen'>
                <div className=' w-full shadow-lg p-5 gap-10 shadow-zinc-500 inset-shadow-sm inset-shadow-zinc-500'>
                    <h2 className=''>Work Experience & Projects</h2>
                    <form onSubmit={handleSubmit} className='m-3 grid grid-cols-1 gap-5'>
                        <div>
                            <div>
                                Work Experience :
                                {formData.Experience.map((exp, index) => (
                                    <div key={index}>
                                        <div className='flex flex-col gap-2 md:flex-row'>
                                            <input
                                                type="text"
                                                name="Organization"
                                                placeholder="Organization"
                                                value={exp.Organization}
                                                onChange={(e) => handleExperienceChange(index, e)}
                                                required
                                            />
                                            <input
                                                type="text"
                                                name="Role"
                                                placeholder="Role"
                                                value={exp.Role}
                                                onChange={(e) => handleExperienceChange(index, e)}
                                                required
                                            />
                                            <input
                                                type="month"
                                                name="Duration"
                                                placeholder="Duration"
                                                value={exp.Duration}
                                                className='md:w-35'
                                                onChange={(e) => handleExperienceChange(index, e)}
                                                required
                                            />
                                            to
                                            <input
                                                type="month"
                                                name="Duration2"
                                                placeholder="Duration"
                                                value={exp.Duration2}
                                                className='md:w-35'
                                                onChange={(e) => handleExperienceChange(index, e)}
                                                required
                                            />
                                        </div>
                                        <div className='flex justify-center'>
                                            <button
                                                type="button"
                                                onClick={() => removeExperience(index)}
                                                className=" text-red-500"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button type="button" onClick={addExperience} className='hover: cursor-pointer' >Add Experience</button>
                        </div>

                        <div>
                            <div>
                                Projects :
                                {formData.Projects.map((Pro, index) => (
                                    <div key={index} >
                                        <div className='flex flex-col md:flex-row'>
                                            <input
                                                type="text"
                                                name="ProjectsName"
                                                placeholder="ProjectsName"
                                                className='w-full md:w-1/2 m-0.5'
                                                value={Pro.ProjectsName}
                                                onChange={(e) => handleProjectChange(index, e)}
                                                required
                                            />
                                            <input
                                                type="text"
                                                name="Technologies"
                                                placeholder="Technologies"
                                                className='w-full md:w-1/2 m-0.5'
                                                value={Pro.Technologies}
                                                onChange={(e) => handleProjectChange(index, e)}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <textarea
                                                type="text"
                                                name="Description"
                                                rows="2"
                                                placeholder="Project Description"
                                                value={Pro.Description}
                                                className="block mt-2 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                onChange={(e) => handleProjectChange(index, e)}
                                                required
                                            />
                                        </div>
                                        <div className='flex justify-center'>
                                            <button
                                                type="button"
                                                onClick={() => removeProject(index)}
                                                className=" text-red-500"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button type="button" onClick={addProject} className='hover: cursor-pointer' >Add Project</button>
                        </div>
                        {/* certificate section */}
                        <div>
                            <div>
                                Certificates :
                                {formData.Certificates.map((Cert, index) => (
                                    <div key={index} className='flex flex-col gap-2 md:flex-row'>
                                        <input
                                            type="text"
                                            name="Organization"
                                            placeholder="Organization"
                                            value={Cert.Organization}
                                            onChange={(e) => handleCertificatesChange(index, e)}
                                            required
                                        />
                                        <input
                                            type="text"
                                            name="CertificateOF"
                                            placeholder="CertificateOF"
                                            value={Cert.CertificateOF}
                                            onChange={(e) => handleCertificatesChange(index, e)}
                                            required
                                        />
                                        <input
                                            type="month"
                                            name="Month"
                                            placeholder="Month"
                                            value={Cert.Month}
                                            onChange={(e) => handleCertificatesChange(index, e)}
                                            required
                                        />

                                        <button
                                            type="button"
                                            onClick={() => removeCertificates(index)}
                                            className=" text-red-500"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <button type="button" onClick={addCertificates} className='hover: cursor-pointer' >Add Certificates</button>
                        </div>
                           {/* certificate section */}
                        <button type="submit" className='hover: cursor-pointer'>submit</button>
                    </form>
                </div>

            </div>
        </>
    )
}
