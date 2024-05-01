import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import img_login from '../assets/imgs/login_img.jpg'
import logo from '../assets/Logo.png'
import Google from '../assets/google.svg'
import { loginUser } from '../redux/apiRequest';

export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newUser = {
            email: email,
            password: password,
        };
        try {
            await loginUser(newUser, dispatch, navigate);
        } catch (error) {
            toast.error(error.message);
        }
    }
    return (
        <>
            <div className="flex">
                <div className='w-1/2 p-8'>
                    <div className='w-[200px]'>
                        <a href="/">
                            <img src={logo} alt="" />
                        </a>
                    </div>
                    <div className='items-center py-[9%] pl-[35%]'>
                        <form className='bg-white rounded-xl shadow-2xl p-12' onSubmit={handleSubmit}>
                            <h1 className='text-[32px] font-semibold mb-3'>Login to your account</h1>
                            <div className='flex flex-col'>
                                <label className='text-base font-medium'>Email</label>
                                <input
                                    className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent'
                                    type='email'
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className='flex flex-col mt-4'>
                                <label className='text-base font-medium'>Password</label>
                                <input
                                    className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent'
                                    type='password'
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className='mt-8 flex justify-between items-center'>
                                <div>
                                    <input type="checkbox" id='remember' />
                                    <label className='ml-2 font-medium text-base' htmlFor="remember">Remember for 30 days</label>
                                </div>
                                <button className='font-medium text-base text-violet-500'>Forgot password</button>
                            </div>
                            <div className='mt-8 flex flex-col gap-y-4'>
                                <button className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-semibold text-base'>Login Now</button>
                                <button
                                    className='flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-4 rounded-xl text-gray-700 text-base border-2 border-gray-100 '>
                                    <img className='w-6 h-6' src={Google} alt="" />
                                    Continue With Google
                                </button>
                            </div>
                            <div className='mt-8 flex justify-center items-center'>
                                <p className='font-medium text-base'>Don't have an account?</p>
                                <Link className='ml-2 font-medium text-base text-blue-500' to='/register'>Sign up</Link>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="h-screen flex justify-center items-center bg-white w-1/2">
                    <div className="w-3/4">
                        <img src={img_login} alt="" className="max-w-full h-auto" />
                    </div>
                </div>
            </div>
        </>
    )
}
