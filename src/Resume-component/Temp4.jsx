import React, { useState } from 'react';

export default function Temp4({ onSubmitForm }) {

  const [formData, setFormData] = useState({
    ProgrammingLang: '',
    WebDev: '',
    DataBase: '',
    VersonControl: '',
    OtherSkills: '',
  });


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
    // console.log(formData)

  };


  return (
    <>
      <div className='h-full w-screen'>
        <div className='flex'>
          {/* information for resume */}
          <div className=' w-full shadow-lg p-5 gap-10 shadow-zinc-500 inset-shadow-sm inset-shadow-zinc-500'>
            <h2 className=''>IT Skills/ Core Skills</h2>
            <form onSubmit={handleSubmit} className='m-3 grid grid-cols-1 gap-5'>
              <label htmlFor="ProgrammingLang" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                Programming Languages
                <textarea
                  id="ProgrammingLang"
                  name='ProgrammingLang'
                  rows="2"
                  value={formData.ProgrammingLang}
                  onChange={handleTextChange}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Programming Languages you know.."
                />
              </label>

              <label htmlFor="WebDev" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                Web Development
                <textarea
                  id="WebDev"
                  name='WebDev'
                  rows="2"
                  value={formData.WebDev}
                  onChange={handleTextChange}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Web Design You know"
                />
              </label>

              <label htmlFor="DataBase" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                DataBase
                <textarea
                  id="DataBase"
                  name='DataBase'
                  rows="2"
                  value={formData.DataBase}
                  onChange={handleTextChange}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="DataBase You know.."
                />
              </label>

              <label htmlFor="VersonControl" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                Version Control System
                <textarea
                  id="VersonControl"
                  name='VersonControl'
                  rows="2"
                  value={formData.VersonControl}
                  onChange={handleTextChange}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=" Version You know.."
                />
              </label>

              <label htmlFor="OtherSkills" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                Other Skills
                <textarea
                  id="OtherSkills"
                  name='OtherSkills'
                  rows="2"
                  value={formData.OtherSkills}
                  onChange={handleTextChange}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Other Skills You know.."
                />
              </label>

              <button type="submit" className='hover: cursor-pointer'>submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
