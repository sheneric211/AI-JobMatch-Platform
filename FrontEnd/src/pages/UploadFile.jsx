import React from 'react'
import { Header } from '../components/Header'
import Upload from '../assets/upload.svg'
import { PiMapPinLine } from "react-icons/pi";
import { IoBagCheckSharp } from "react-icons/io5";

export const UploadFile = () => {
    return (
        <>
            <Header/>
            <div className='bg-[#f5edff] min-h-[795px] pt-10'>
                <div className='mx-[500px] bg-white rounded-xl shadow-md'>
                    <h2 className='font-extrabold text-[24px] text-center pt-5'>Upload Resume</h2>
                    <div className='p-8'>
                        <div class="flex items-center justify-center w-full">
                            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-52 border-2 border-violet-500 border-dashed rounded-lg cursor-pointer bg-[#f5edff] dark:hover:bg-bray-800 hover:bg-gray-100">
                                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                    <img className='w-[80px]' src={Upload} />
                                    <p class="m-2 text-lg font-semibold text-violet-500"><span class="text-black">Drag & drop files or</span> Browse</p>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">Supported formates: PDF, Word</p>
                                </div>
                                <input id="dropzone-file" type="file" class="hidden" />
                            </label>
                        </div>
                        <div className='mt-8'>
                            <p className='font-semibold text-gray-500'>Uploading</p>
                        </div>
                        <div class="rounded-md mt-2">
                            <div class="flex items-center justify-between">
                                <span class="truncate pr-3 text-sm font-medium text-[#07074D]">
                                banner-design.png
                                </span>
                            </div>
                            <div class="relative mt-2 h-[3px] w-full rounded-lg bg-[#E2E5EF]">
                                <div class="absolute left-0 right-0 h-full w-[75%] rounded-lg bg-[#6A64F1]"
                                ></div>
                            </div>
                        </div>
                        <div className='py-5'>
                            <p className='font-semibold text-gray-500 mb-2'>Your other references: </p>
                            <div className='flex gap-4'>
                                <div class="relative w-1/2"> 
                                    <input type="text"
                                        class="pl-10 pr-4 py-2 border rounded-lg w-full" 
                                        placeholder="Job title, keywords or company..." /> 
                                    <div class="absolute inset-y-0 left-0 pl-3  
                                        flex items-center  
                                        pointer-events-none"> 
                                        <IoBagCheckSharp className='text-[#9a47ff]' /> 
                                    </div> 
                                </div>
                                <div class="relative w-1/2"> 
                                    <input type="text"
                                        class="pl-10 pr-4 py-2 border rounded-lg w-full" 
                                        placeholder="Location" /> 
                                    <div class="absolute inset-y-0 left-0 pl-3  
                                        flex items-center  
                                        pointer-events-none"> 
                                        <PiMapPinLine className='text-[#9a47ff]' /> 
                                    </div> 
                                </div> 
                            </div>
                        </div>
                        <button 
                            className='w-full rounded-md p-4 bg-[#9a47ff] font-bold text-sm text-white'>SEARCH
                        </button>
                        <button 
                            className='w-full rounded-md p-4 font-bold text-sm text-black mt-2'>CANCEL
                        </button>
                    </div> 
                </div>
            </div>
        </>
    )
}
