import React from 'react'
import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'
import { FaCircle } from "react-icons/fa6";
import { useSelector } from 'react-redux';

export const Header = () => {
    const user = useSelector((state) => state.auth.currentUser);
    console.log(user);
    return (
        <>
            <div className='px-10 py-4 flex justify-between items-center'>
                <div className='w-[200px]'>
                    <a href="/">
                        <img src={logo} alt="" />
                    </a>
                </div>
                <div className='pl-6 rounded-[100px] p-2 gap-11 bg-white bg-opacity-40 flex text-base items-center'>
                    <Link to='/'>Home</Link>
                    <Link to='/jobmatch'>JobMatch</Link>
                    <div className='flex items-center px-4 py-3 gap-2 border border-[#9A47FF] rounded-[100px]'>
                        {user ? (
                            <div>
                                <span>Hello, {user.name}</span>
                            </div>
                        ) : (
                            <div>
                                <Link to='/login'>Sign in</Link> /
                                <Link to='/register'>Sign up</Link>
                            </div>
                        )}
                        <FaCircle className='text-[#9A47FF] mt-1' />
                    </div>
                </div>
            </div>
        </>
    )
}
