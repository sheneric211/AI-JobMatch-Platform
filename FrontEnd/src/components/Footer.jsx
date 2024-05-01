import React from 'react'
import logo from '../assets/Logo.png'
import { FaFacebook } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { CiMail } from "react-icons/ci";

export const Footer = () => {
    return (
        <>
            <div className='bg-[#5E2B9C] py-12 px-10'>
                <div className='flex justify-between text-white'>
                    <div className='w-[200px]'>
                        <img src={logo} alt="" />
                    </div>
                    <div>
                        <p className='text-xl font-semibold'>About US</p>
                        <div className='text-[15px] flex flex-col gap-2 mt-3'>
                            <span>Home</span>
                            <span>AI Match</span>
                            <span>Contact us</span>
                        </div>
                    </div>
                    <div className='mr-10'>
                        <p className='text-xl font-semibold'>Terms & Conditions</p>
                        <div className='text-[15px] flex flex-col gap-2 mt-3'>
                            <span>Privacy policy</span>
                        </div>
                    </div>
                </div>
                <div className='flex gap-5 justify-end items-center mt-10'>
                    <FaFacebook className='text-2xl text-white' />
                    <TiSocialLinkedinCircular className='text-3xl text-white' />
                    <CiMail className='text-3xl text-white' />
                </div>
            </div>
        </>
    )
}
