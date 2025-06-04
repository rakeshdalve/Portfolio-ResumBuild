import React, { useState } from 'react';

export default function Temp5({ onSubmitForm }) {
    const [formData, setFormData] = useState({
        Strengths: '',
        AOI: '',
        Hobbies: '',
        DOB: '',
        gender: '',
        maritalStatus: '',
        Permanent_address: '',
    });

    const handleTextChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formData);
        onSubmitForm(formData);
        setSubmitted(true);
    };
    return (
        <>
            <div className='h-screen w-screen overflow-auto'>
                <form onSubmit={handleSubmit} className='m-3 grid grid-cols-1 gap-2'>
                    <label htmlFor="Strengths" className="block text-sm font-medium text-gray-900 dark:text-black">
                        Strengths
                        <textarea
                            id="Strengths"
                            name='Strengths'
                            rows="2"
                            value={formData.Strengths}
                            onChange={handleTextChange}
                            className="block m-1 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Your Strengths .."
                        />
                    </label>

                    <label htmlFor="AOI" className="block text-sm font-medium text-gray-900 dark:text-black">
                        Area Of Improvement
                        <textarea
                            id="AOI"
                            name='AOI'
                            rows="2"
                            value={formData.AOI}
                            onChange={handleTextChange}
                            className="block m-1 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Area Of Improvement.."
                        />
                    </label>

                    <label htmlFor="Hobbies" className="block text-sm font-medium text-gray-900 dark:text-black">
                        Hobbies
                        <textarea
                            id="Hobbies"
                            name='Hobbies'
                            rows="2"
                            value={formData.Hobbies}
                            onChange={handleTextChange}
                            className="block p-2.5 m-1 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Hobbies.."
                        />
                    </label>

                    <div>
                        {/* information for resume */}
                        <div className=' w-full shadow-lg p-5 gap-10 shadow-zinc-500 inset-shadow-sm inset-shadow-zinc-500'>
                            <h2 className=''>Basic Information</h2>
                            <div className='m-3 grid grid-cols-1 md:grid md:grid-cols-2 gap-2'>
                                <label className='flex gap-2 items-center'>
                                    Date Of Birth
                                    <input
                                        className='m-1 w-fit'
                                        type="date"
                                        name="DOB"
                                        value={formData.DOB}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>

                                <div className='flex gap-2'>
                                    <label>Gender:</label><br />

                                    <div>
                                        <label>
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="male"
                                                checked={formData.gender === 'male'}
                                                onChange={handleChange}
                                                required
                                            />
                                            Male
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="female"
                                                checked={formData.gender === 'female'}
                                                onChange={handleChange}
                                            />
                                            Female
                                        </label>
                                    </div>

                                </div>

                                <div className='flex gap-1'>
                                    <label>Marital Status:</label><br />
                                    <label>
                                        <input
                                            type="radio"
                                            name="maritalStatus"
                                            value="single"
                                            checked={formData.maritalStatus === 'single'}
                                            onChange={handleChange}
                                            required
                                        />
                                        Single
                                    </label><br />
                                    <label>
                                        <input
                                            type="radio"
                                            name="maritalStatus"
                                            value="married"
                                            checked={formData.maritalStatus === 'married'}
                                            onChange={handleChange}
                                        />
                                        Married
                                    </label>
                                </div>

                                <label>
                                    Permanent Address:
                                    <textarea
                                        name='Permanent_address'
                                        rows="2"
                                        value={formData.Permanent_address}
                                        onChange={handleChange}
                                        className="block p-2.5 m-1 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Permanent address.."
                                    />
                                </label>

                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button type="submit" >submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}


