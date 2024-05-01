import React from 'react'
import { Header } from '../components/Header'
import Banner from '../assets/imgs/banner.png'
import Amico from '../assets/imgs/amico.png'
import Rafiki from '../assets/imgs/rafiki.png'
import { Footer } from '../components/Footer'
import glassdoor from '../../public/glassdoor.png'
import indeed from '../../public/indeed.png'
import upwork from '../../public/upwork.png'
import ziprecruiter from '../../public/ziprecruiter.png'
import ami from '../assets/imgs/ami.png'
export const HomePage = () => {
    return (
        <>
            <div className='bg-gradient-to-r from-[#e6dbf1] via-[#b3a7e4] to-[#f4f5fc]'>
                <Header />
                <div className='px-[120px] py-20 flex justify-between items-center'>
                    <div>
                        <div>
                            <h1 className='text-[#091E42] font-semibold text-6xl'>We’re dedicated to helping you job search.</h1>
                            <p className='text-[#354764] font-normal text-lg my-8 max-w-[60%]'>Forget endlessly scrolling on many job posting sites. Get job recommendations based on your resume!</p>
                        </div>
                        <a href='/upload'>
                            <button className='bg-[#AB66FF] text-white font-semibold px-7 py-3 rounded-3xl'>Upload Resume</button>
                        </a>
                    </div>
                    <div className='w-[650px]'>
                        <img src={Banner} alt="" />
                    </div>
                </div>
            </div>
            <div className='bg-[#E8FAFA] py-10'>
                <p className='text-[#5A5A5A] font-semibold text-3xl items-center flex justify-center'></p>
                <div className='flex justify-center gap-[70px] mt-14 mb-8'>
  
                </div>
            </div>
            <div className='py-[120px] bg-gradient-to-r from-[#fff] via-[#f7fdfd] to-[#ebfafb]'>
                <h1 className='text-5xl font-semibold items-center flex justify-center text-[#091E42]'>The better way to job search</h1>
                <div className='flex justify-center gap-36 items-center mt-14'>
                    <div className='w-[550px]'>
                        <img src={ami} alt="" />
                    </div>
                    <div className='text-[#1E1E1E]'>
                        <h3 className='text-[40px] font-medium'>Job matching with AI</h3>
                        <p className='text-[#42526D] w-[75%] my-5 text-lg'>We serve you the newest postings and help you find the most relevant jobs based on your resume. </p>
                        <button className='text-[20px] bg-[#AB66FF] text-white font-semibold px-9 py-3 rounded-3xl'>Get Matched</button>
                    </div>
                </div>
            </div>
            <div className='px-10 mb-10'>
                <div className='flex justify-between items-center px-20 py-10 bg-gradient-to-r from-[#b9f0ef] via-[#b8cfef] to-[#b8b6f0] rounded-[20px]'>
                    <div>
                        <h3 className='font-semibold text-5xl'>Upload Resume</h3>
                        <p className='w-[70%] text-xl text-[#505F79] my-9'>Start by signing in to upload your resume. Begin your job search journey with just a few clicks.</p>
                        <button className='text-[20px] bg-[#AB66FF] text-white font-semibold px-9 py-3 rounded-3xl'>Get Matched</button>
                    </div>
                    <div className='w-[340px]'>
                        <img src={Rafiki} alt="" />
                    </div>
                </div>
            </div>
            <div className='px-10 mb-10'>
                <div className='flex justify-between items-center px-20 py-10 bg-gradient-to-r from-[#b9f0ef] via-[#b8cfef] to-[#b8b6f0] rounded-[20px]'>
                    <div>
                        <h3 className='font-semibold text-5xl'>Job matching with AI</h3>
                        <p className='w-[70%] text-xl text-[#505F79] my-9'>Our AI-driven technology analyzes your resume and job preferences to connect you with the most suitable opportunities.</p>
                        <button className='text-[20px] bg-[#AB66FF] text-white font-semibold px-9 py-3 rounded-3xl'>Explore Matches</button>
                    </div>
                    <div className='w-[340px]'>
                        <img src={Amico} alt="" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
