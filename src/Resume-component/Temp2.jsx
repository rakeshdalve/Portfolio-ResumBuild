import React, { useState } from 'react';

export default function Temp2({ onSubmitForm }) {

    const [formData, setFormData] = useState({
        Objective: '',
        SUMMARY: '',
        Qualification: [],
    });

    const addQualification = () => {
        setFormData((prev) => ({
            ...prev,
            Qualification: [
                ...prev.Qualification,
                { degree: '', University: '', years: '' },
            ],
        }));
    };

    const handleQualificationChange = (index, e) => {
        const { name, value } = e.target;
        const updatedQualifications = [...formData.Qualification];
        updatedQualifications[index] = {
            ...updatedQualifications[index],
            [name]: value,
        };
        setFormData((prev) => ({
            ...prev,
            Qualification: updatedQualifications,
        }));
    };

    const handleTextChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitForm(formData)

    };

    const removeQualification = (indexToRemove) => {
        setFormData((prev) => ({
            ...prev,
            Qualification: prev.Qualification.filter((_, index) => index !== indexToRemove),
        }));
    };


    return (
        <>
            <div className='h-full w-screen'>
                <div className='flex'>
                    {/* information for resume */}
                    <div className=' w-full shadow-lg p-5 gap-10 shadow-zinc-500 inset-shadow-sm inset-shadow-zinc-500'>
                        <h2 className=''>Objective & Qualification</h2>
                        <form onSubmit={handleSubmit} className='m-3 grid grid-cols-1 gap-5'>
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                                Your Objective

                                <textarea
                                    id="Objective"
                                    name='Objective'
                                    rows="4"
                                    value={formData.Objective}
                                    onChange={handleTextChange}
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                    placeholder="write your Objective..."
                                />
                            </label>

                            <label htmlFor="SUMMARY" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                                SUMMARY

                                <textarea
                                    id="SUMMARY"
                                    name='SUMMARY'
                                    rows="4"
                                    value={formData.SUMMARY}
                                    onChange={handleTextChange}
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                    placeholder="write your SUMMARY..."
                                />
                            </label>

                            <div>
                                <div>
                                    Qualification :
                                    {formData.Qualification.map((qua, index) => (
                                        <div key={index} className='flex flex-col md:flex-row'>
                                            <input
                                                type="text"
                                                name="degree"
                                                placeholder="degree"
                                                value={qua.degree}
                                                onChange={(e) => handleQualificationChange(index, e)}
                                                required
                                            />
                                            <input
                                                type="text"
                                                name="University"
                                                placeholder="University"
                                                value={qua.University}
                                                onChange={(e) => handleQualificationChange(index, e)}
                                                required
                                            />
                                            <input
                                                type="text"
                                                name="years"
                                                placeholder="Years"
                                                value={qua.years}
                                                onChange={(e) => handleQualificationChange(index, e)}
                                            />

                                            <button
                                                type="button"
                                                onClick={() => removeQualification(index)}
                                                className="ml-2 text-red-500"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    ))}
                                </div>

                                <button type="button" onClick={addQualification} className='hover: cursor-pointer' >Add Qualification</button>
                            </div>

                            <button type="submit" className='hover: cursor-pointer'>submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
