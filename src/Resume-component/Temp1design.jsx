import React, { useEffect, useRef, useState } from 'react';
// import html2pdf from 'html2pdf.js'; // Not needed for backend PDF generation
import { RxTriangleRight } from "react-icons/rx";
import { FaCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

export default function Temp1design({ data = {} }) {
    const [imageURL, setImageURL] = useState(null);
    const resumeRef = useRef(); // This ref is now primarily for displaying the HTML, not for PDF generation

    useEffect(() => {
        if (data.image) {
            const reader = new FileReader();
            reader.onload = () => {
                setImageURL(reader.result); // base64 image
            };
            reader.readAsDataURL(data.image); // convert to base64
        }
    }, [data.image]);


    return (
        <>
            <div ref={resumeRef} className='border border-gray-300 p-4 text-xs'>
                <div className='flex justify-between text-15px]'>
                    {/* image */}
                    <div className='w-1/3'>
                        <img src={imageURL || "placeholder.jpg"} alt="profile" className='h-30 w-22' />
                    </div>
                    {/* normal information */}

                    <div className='w-2/3'>
                        {/* name */}
                        <div className='font-bold flex justify-end mt-2 m-1'>
                            {`${data.fullName ? data.fullName : "fullName"}`}
                        </div>

                        <div className=' text-[8px] md:text-xs flex flex-col'>
                            <div className='flex items-center'>
                                {data.address && (<FaLocationDot className='size-2 md:size-3' />)}
                                <h1 className='m-0.5'>{`${data.address ? data.address : "address"}`}</h1>
                            </div>
                            <div className='flex gap-1 m-0.5'>
                                <div className='flex items-center'>
                                    {data.mobile && (<IoCall className='size-2 md:size-3' />)}
                                    <h1>{`${data.mobile ? data.mobile : "mobile"}`}</h1>
                                </div>
                                <div className='flex items-center m-0.5'>
                                    {data.email && (<MdEmail className='size-2 md:size-3' />)}
                                    <h1>{`${data.email ? data.email : "email"}`}</h1>
                                </div>
                            </div>
                            <div className='flex items-center m-0.5'>
                                {data.linkedin && (<FaLinkedin className='size-2 md:size-3' />)}
                                <h1>{`${data.linkedin ? data.linkedin : "linkedin"}`}</h1>
                            </div>
                            <div className='flex items-center'>
                                {data.github && (<FaGithub className='size-2 md:size-3' />)}
                                <h1>{`${data.github ? data.github : "github"}`}</h1>
                            </div>
                        </div>
                    </div>

                </div>
                <hr className='m-5' />
                <div>
                    {/* Summary */}
                    {data.SUMMARY && (
                        <div className=''>
                            <h1 className='font-bold'>Summary</h1>
                            <p className='m-1'>
                                {data.SUMMARY}
                            </p>
                        </div>
                    )}
                    {/* Objective */}
                    {data.Objective && (
                        <div>
                            <h1 className="font-bold">Objective</h1>
                            <p className='m-1'>
                                {data.Objective}
                            </p>
                        </div>
                    )}

                    {/* Qualifications */}
                    <div>
                        {data.Qualification && data.Qualification.map((que, index) => {
                            return (
                                <div key={index}>
                                    {index === 0 && <h1 className="font-bold">Qualification</h1>}
                                    <div className='flex m-1 gap-1 flex-col md:flex-row'>
                                        <div className='flex gap-1'>
                                            <div>
                                                {que.degree}
                                            </div>
                                            <h1>from</h1>
                                            <div>
                                                {que.University}
                                            </div>
                                        </div>
                                        <div>
                                            {que.years}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    {/* Experience */}
                    <div>
                        {data.Experience && data.Experience.map((Exp, index) => {
                            return (
                                <div key={index}>
                                    {index === 0 && <h1 className="font-bold">Experience</h1>}
                                    <div className='flex flex-col'>
                                        <div className='flex m-0.5'>
                                            <h1 className='font-bold'>Organization:-</h1>
                                            <div>
                                                {Exp.Organization}
                                            </div>
                                        </div>
                                        <div className='flex m-0.5 gap-2'>
                                            <div>
                                                <span className='font-bold p-0.5'>Role:-</span>{Exp.Role}
                                            </div>
                                            <div>
                                                <span className='font-bold p-0.5'>From:-</span>
                                                {Exp.Duration}
                                            </div>
                                            to
                                            <div>
                                                {Exp.Duration2}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    {/* Projects */}
                    <div className='mt-1 mb-1'>
                        {data.Projects && data.Projects.map((Pro, index) => {
                            return (
                                <div key={index} >
                                    {index === 0 && <h1 className="font-bold">Projects</h1>}
                                    <div className='flex flex-col gap-0 m-1'>
                                        <div className='flex m-0.5 gap-1'>
                                            <div className='flex-none w-auto'>
                                                <h1 className='font-bold flex gap-1 items-center'><FaCircle size={7} />ProjectsName:-</h1>
                                            </div>
                                            <div>
                                                <p> {Pro.ProjectsName}</p>
                                            </div>
                                        </div>

                                        <div className='flex m-0.5 gap-1'>
                                            <div className='flex-none w-auto'>
                                                <h1 className='font-bold flex gap-1 items-center'><FaCircle size={7} />Technologies:-</h1>
                                            </div>
                                            <div>
                                                <p> {Pro.Technologies}</p>
                                            </div>
                                        </div>

                                        <div className='flex m-0.5 gap-1'>
                                            <div className='flex-none w-auto'>
                                                <h1 className='font-bold flex gap-1 items-center'><FaCircle size={7} />Description:-</h1>
                                            </div>
                                            <div>
                                                <p> {Pro.Description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div >
                    {/* Projects */}

                    {/* IT Skills/ Core Skills */}
                    <div className='gap-2'>
                        {(data.ProgrammingLang || data.WebDev || data.DataBase || data.VersonControl || data.OtherSkills) && (
                            <h1 className='font-bold'>IT Skills/ Core Skills</h1>
                        )}
                        {data.ProgrammingLang && (
                            <>

                                <div className='flex gap-2 m-1'>
                                    <div className='flex-none w-auto'>
                                        <h1 className='font-bold flex gap-1'><RxTriangleRight size={20} />Programming Languages :</h1>
                                    </div>
                                    <div>
                                        <p> {data.ProgrammingLang}</p>
                                    </div>
                                </div>
                            </>
                        )}

                        {/* Web Development */}
                        {data.WebDev && (
                            <div className='flex gap-2 m-1'>
                                <div className='flex-none w-auto'>
                                    <h1 className='font-bold flex gap-1'><RxTriangleRight size={20} />Web Development :</h1>
                                </div>
                                <div>
                                    <p> {data.WebDev}</p>
                                </div>
                            </div>
                        )}

                        {/* DataBase */}
                        {data.DataBase && (
                            <div className='flex gap-2 m-1'>
                                <div className='flex-none w-auto'>
                                    <h1 className='font-bold flex gap-1'><RxTriangleRight size={20} />DataBase :</h1>
                                </div>
                                <div>
                                    <p> {data.DataBase}</p>
                                </div>
                            </div>
                        )}

                        {/* Version Control */}
                        {data.VersonControl && (
                            <div className='flex gap-2 m-1'>
                                <div className='flex-none w-auto'>
                                    <h1 className='font-bold flex gap-1'><RxTriangleRight size={20} />Version Control :</h1>
                                </div>
                                <div>
                                    <p> {data.VersonControl}</p>
                                </div>
                            </div>
                        )}

                        {/* Other Skills */}
                        {data.OtherSkills && (
                            <div className='flex gap-2 m-1'>
                                <div className='flex-none w-auto'>
                                    <h1 className='font-bold flex gap-1'><RxTriangleRight size={20} />Other Skills :</h1>
                                </div>
                                <div>
                                    <p> {data.OtherSkills}</p>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* IT Skills/ Core Skills */}

                    {/* Cerificates */}
                    <div >
                        {
                            data.Certificates && data.Certificates.map((Cert, index) => {
                                return (
                                    <div key={index}>
                                        {index === 0 && <h1 className="font-bold">Certificates</h1>}

                                        <div className='flex gap-1 m-0.5'>
                                            <div>
                                                {Cert.CertificateOF}
                                            </div>
                                            <h1>--</h1>
                                            <div>
                                                {Cert.Organization}
                                            </div>
                                            <h1>--</h1>
                                            <div>
                                                {Cert.Month}
                                            </div>
                                        </div>

                                    </div>
                                );
                            })
                        }
                    </div>
                    {/* Cerificates */}

                    {/* Other Information */}

                    <div className='gap-2'>
                        {/* Strength */}
                        {data.Strengths && (
                            <>
                                <div className='flex gap-2'>
                                    <div className='flex-none w-auto'>
                                        <h1 className='font-bold gap-1'>Strengths :</h1>
                                    </div>
                                    <div>
                                        <p> {data.Strengths}</p>
                                    </div>
                                </div>
                            </>
                        )}

                        {/* Area of improvement */}
                        {data.AOI && (
                            <>
                                <div className='flex gap-2'>
                                    <div className='flex-none w-auto'>
                                        <h1 className='font-bold gap-1'>Area of improvement :</h1>
                                    </div>
                                    <div>
                                        <p> {data.AOI}</p>
                                    </div>
                                </div>
                            </>
                        )}

                        {/* Hobbies */}
                        {data.Hobbies && (
                            <>
                                <div className='flex gap-2'>
                                    <div className='flex-none w-auto'>
                                        <h1 className='font-bold gap-1'>Hobbies :</h1>
                                    </div>
                                    <div>
                                        <p> {data.Hobbies}</p>
                                    </div>
                                </div>
                            </>
                        )}

                        <div className='mt-4'>

                            {(data.DOB || data.Permanent_address || data.maritalStatus || data.gender) && (
                                <h1 className='font-bold'>Basic Information</h1>
                            )}

                            {/* Date Of Birth */}
                            {data.DOB && (
                                <div className='flex gap-2'>
                                    <div className='flex-none w-auto'>
                                        <h1 className='font-bold flex gap-1'>Date Of Birth :</h1>
                                    </div>
                                    <div>
                                        <p> {data.DOB}</p>
                                    </div>
                                </div>
                            )}

                            {/* Gender */}
                            {data.gender && (
                                <div className='flex gap-2'>
                                    <div className='flex-none w-auto'>
                                        <h1 className='font-bold flex gap-1'>Gender :</h1>
                                    </div>
                                    <div>
                                        <p> {data.gender}</p>
                                    </div>
                                </div>
                            )}

                            {/* Marital Status */}
                            {data.maritalStatus && (
                                <div className='flex gap-2'>
                                    <div className='flex-none w-auto'>
                                        <h1 className='font-bold flex gap-1'>Marital Status :</h1>
                                    </div>
                                    <div>
                                        <p> {data.maritalStatus}</p>
                                    </div>
                                </div>
                            )}

                            {/* Permanent Address */}
                            {data.Permanent_address && (
                                <div className='flex gap-2'>
                                    <div className='flex-none w-auto'>
                                        <h1 className='font-bold flex gap-1'>Permanent Address :</h1>
                                    </div>
                                    <div>
                                        <p> {data.Permanent_address}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}