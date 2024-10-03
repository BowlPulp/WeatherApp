import React, { useState } from 'react';
import axios from 'axios';
import weather from '../../assets/weather.png';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }

        // Make a POST request to store user data
        axios.post('https://weather-app-mtp6.vercel.app/signup', { email, password })
            .then(response => {
                toast.success(response.data.message || "User registered successfully!");
            })
            .catch(error => {
                if (error.response && error.response.data.error) {
                    toast.error(error.response.data.error);
                } else {
                    toast.error('Error: Could not connect to the server.');
                }
            });
    };

    return (
        <section>
            <div className="flex h-screen md:flex-row flex-col">
                <div className="w-full md:w-1/2 bg-[#d0dcee] md:px-4">
                    <div className="h-screen flex items-center justify-center">
                        <div className='grid'>
                            <h2 className="text-3xl font-bold leading-tight text-[black] sm:text-4xl">Sign up</h2>
                            <p className="mt-2 text-base text-[#008e9a] mb-5">
                                Already have an account?{' '}
                                <a href="/login" title="" className="font-semibold text-black transition-all duration-200 hover:underline">Login here</a>
                            </p>

                            <form onSubmit={handleSignup}>
                                <div className='flex flex-col gap-2 text-lg'>
                                    <p>Email Address</p>
                                    <input
                                        className="w-full rounded-lg px-2 py-2 bg-inherit border-2 border-[#008e9a]"
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="flex flex-col gap-2 mt-5">
                                    <div className='flex justify-between'>
                                        <p className='text-lg'>Password</p>  
                                    </div>
                                    <input
                                        className="w-full rounded-lg px-2 py-2 bg-inherit border-2 border-[#008e9a]"
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="flex flex-col gap-2 mt-5">
                                    <div className='flex justify-between'>
                                        <p className='text-lg'>Confirm Password</p>  
                                    </div>
                                    <input
                                        className="w-full rounded-lg px-2 py-2 bg-inherit border-2 border-[#008e9a]"
                                        type="password"
                                        placeholder="Confirm Password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                    />
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="mb-3 mt-5 inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                                    >
                                        Get started
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                
                <div className="w-full md:w-1/2 bg-[#ffffff] flex justify-center items-center">
                    <img src={weather} alt="Weather" className="h-auto" />
                </div>
            </div>
            <ToastContainer />
        </section>
    );
}

export default Signup;
