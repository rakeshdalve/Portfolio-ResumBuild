import React, { useState } from 'react';
// import Temp1design from './Temp1design';

export default function Temp1({ onSubmitForm }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    linkedin: '',
    github: '',
    mobile: '',
    image: null,
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, image: file }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    onSubmitForm(formData)
    setSubmitted(true);
  };
  return (
    <>
      <div className='h-full w-screen'>
        
        <div className='flex'>
          {/* information for resume */}
          <div className=' w-full shadow-lg p-5 gap-10 shadow-zinc-500 inset-shadow-sm inset-shadow-zinc-500'>
            <h2 className=''>Personal Information</h2>
            <form onSubmit={handleSubmit} >
              <div className='m-3 grid grid-cols-1 md:grid md:grid-cols-2 gap-5'>
                <label>
                  Full Name:
                  <input
                    className='m-1'
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </label>

                <label>
                  Email:
                  <input
                    className='m-1 w-50'
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </label>

                <label>
                  Address:
                  <input
                    className='m-1 w-50'
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </label>

                <label>
                  LinkedIn:
                  <input
                    className='m-1 w-50'
                    type="url"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    placeholder="https://linkedin.com/in/yourname"
                    required
                  />
                </label>

                <label>
                  Github:
                  <input
                    className='m-1 w-50'
                    type="url"
                    name="github"
                    value={formData.github}
                    onChange={handleChange}
                    placeholder="https://github.com/yourname"
                    required
                  />
                </label>

                <label>
                  Mobile:
                  <input
                    className='m-1 w-50'
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    pattern="[0-9]{10}"
                    placeholder="10-digit number"
                    required
                  />
                </label>

                <label>
                  Upload Image:
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </label>

                {imagePreview && (
                  <div>
                    <strong>Image Preview:</strong><br />
                    <img src={imagePreview} alt="Preview" style={{ width: '100px', borderRadius: '8px' }} />
                  </div>
                )}
              </div>
              <div className='flex justify-center items-center'>
                <button type="submit" >submit</button>
              </div>
            </form>
          </div>
          {/* information for resume */}

          {/* template */}
          {/* <div className='w-1/2'>
              <Temp1design
                  fullName={formData.fullName}
                  email={formData.email}
                  address={formData.address}
                  linkedin={formData.linkedin}
                  github={formData.github}
                  mobile={formData.mobile}
                  image={imagePreview}
                />
            </div> */}
        </div>
      </div>
    </>
  )
}


