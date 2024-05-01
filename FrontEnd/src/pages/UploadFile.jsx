import React, { useState } from 'react';
import { Header } from '../components/Header';
import Upload from '../assets/upload.svg';
import { PiMapPinLine } from 'react-icons/pi';
import { IoBagCheckSharp } from 'react-icons/io5';
import axios from 'axios';

export const UploadFile = () => {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setUploadStatus(`Selected: ${selectedFile.name}`);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file.');
      return;
    }

    setUploadStatus(`Uploading: ${file.name}`);
    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post('http://10.128.0.14:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('File uploaded successfully.');
      setUploadStatus(`Uploaded: ${file.name}`);
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file.');
      setUploadStatus(`Failed to upload: ${file.name}`);
    }
  };

  return (
    <>
      <Header />
      <div className='bg-[#f5edff] min-h-[795px] pt-10'>
        <div className='mx-[500px] bg-white rounded-xl shadow-md'>
          <h2 className='font-extrabold text-[24px] text-center pt-5'>Upload Resume</h2>
          <div className='p-8'>
            <div className='flex items-center justify-center w-full'>
              <label htmlFor='dropzone-file' className='flex flex-col items-center justify-center w-full h-52 border-2 border-violet-500 border-dashed rounded-lg cursor-pointer bg-[#f5edff]'>
                <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                  <img src={Upload} alt='Upload icon' className='mb-3 w-10 h-10' />
                  <p className='mb-2 text-sm text-gray-500'>Drag & drop files or Browse</p>
                  <p className='text-xs text-gray-500'>Supported formats: PDF, Word</p>
                </div>
                <input id='dropzone-file' type='file' className='hidden' onChange={handleFileChange} />
              </label>
            </div>
            <div className='mt-8'>
              <p className='font-semibold text-gray-500'>{uploadStatus}</p>
            </div>
            <div className='py-5'>
              <p className='font-semibold text-gray-500 mb-2'>Your other references:</p>
              <div className='flex gap-4'>
                <div className='relative w-1/2'>
                  <input
                    type='text'
                    className='pl-10 pr-4 py-2 border rounded-lg w-full'
                    placeholder='Job title, keywords or company...'
                  />
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <IoBagCheckSharp className='text-[#9a47ff]' />
                  </div>
                </div>
                <div className='relative w-1/2'>
                  <input
                    type='text'
                    className='pl-10 pr-4 py-2 border rounded-lg w-full'
                    placeholder='Location'
                  />
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <PiMapPinLine className='text-[#9a47ff]' />
                  </div>
                </div>
              </div>
            </div>
            <button className='w-full rounded-md p-4 bg-[#9a47ff] font-bold text-sm text-white' onClick={handleUpload}>
              SEARCH
            </button>
            <button className='w-full rounded-md p-4 font-bold text-sm text-black mt-2'>CANCEL</button>
          </div>
        </div>
      </div>
    </>
  );
};
