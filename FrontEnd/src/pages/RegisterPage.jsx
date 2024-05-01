import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import img_login from '../assets/imgs/login_img.jpg';
import logo from '../assets/Logo.png';
import Google from '../assets/google.svg';
import { registerUser } from '../redux/apiRequest';
import netlifyIdentity from 'netlify-identity-widget';
import { toast } from 'react-toastify'; // Assuming you're using react-toastify for toasts

export const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        netlifyIdentity.init();

        netlifyIdentity.on('login', (user) => {
            toast.success('Registration successful. Welcome ' + user.user_metadata.full_name);
            navigate('/dashboard'); // Redirect to dashboard after registration
        });

        netlifyIdentity.on('error', (err) => {
            toast.error('Error: ' + err.message);
        });

        return () => {
            netlifyIdentity.off('login');
            netlifyIdentity.off('error');
        }
    }, [navigate]);

    const handleSignup = () => {
        netlifyIdentity.open('signup');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        handleSignup();
    };


    return (
        <div className="flex">
            <div className='w-1/2 p-8'>
                <div className='w-[200px]'>
                    <a href="/">
                        <img src={logo} alt="" />
                    </a>
                </div>
                <div className='items-center py-[9%] pl-[35%]'>
                    <form className='bg-white rounded-xl shadow-2xl p-12' onSubmit={handleSubmit}>
                        <h1 className='text-[32px] font-semibold mb-3'>Create an account</h1>
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
                            <button type='submit' className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-semibold text-base'>Create Account</button>
                            <button
                                type='button'
                                className='flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4  rounded-xl text-gray-700 text-base border-2 border-gray-100 '
                                onClick={() => netlifyIdentity.open('signup')}>
                                <img className='w-6 h-6' src={Google} alt="" />
                                Continue With Google
                            </button>
                        </div>
                        <div className='mt-8 flex justify-center items-center'>
                            <p className='font-medium text-base'>Already have an account?</p>
                            <Link className='ml-2 font-medium text-base text-blue-500' to='/login'>Log in</Link>
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
    )
}
