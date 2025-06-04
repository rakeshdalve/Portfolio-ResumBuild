import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Temp1design from './Temp1design';

export default function Preview() {
  const location = useLocation();
  const { data } = location.state || {};

  const resumeRef = useRef();

  // const handleDownloadPDF = async () => {
  //   const element = resumeRef.current;

  //   if (!element) {
  //     console.error("Element to capture for PDF is not found.");
  //     return;
  //   }

  //   try {
  //     const canvas = await html2canvas(element, { scale: 2 });
  //     const imgData = canvas.toDataURL('image/png'); 

  //     const pdf = new jsPDF('p', 'mm', 'a4');
  //     const pageWidth = pdf.internal.pageSize.getWidth();   
  //     const pageHeight = pdf.internal.pageSize.getHeight(); 

  //     const imgProps = pdf.getImageProperties(imgData);
  //     const pdfWidth = pageWidth;
  //     const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

  //     pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      
  //     pdf.save('resume.pdf');
  //   } catch (error) {
  //     console.error("Error generating PDF:", error);
  //   }
  // };

  const handleDownloadPDF = ()=>{
       window.print();
  }

  return (
    <div className='flex justify-center'>
      <div className='md:w-1/2 w-screen'>
        <div ref={resumeRef} id='print-area'>
          <Temp1design data={data} />
        </div>
        <div className='flex justify-center mt-4 mb-8'> 
          <button
            onClick={handleDownloadPDF}
            className='m-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-300 ease-in-out'
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}
