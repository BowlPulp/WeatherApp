import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import hotWeatherImage from '../../assets/hot-weather.png';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();  // Hook for navigation

    const handleLogin = async(e) => {
        e.preventDefault();

        // Make a POST request to check login credentials
        axios.post('https://weatherapp-8bhd.onrender.com/login', { email, password })
            .then(response => {
                let x = response.data;
                console.log(response);
                if (x.message.includes("Login successful.")) {
                    toast.success("Logged in!");
                    setTimeout(() => {
                        navigate('/');  // Redirect to homepage on successful login
                    }, 1000);
                } else {
                    toast.error(response.data.message);  // Show error message from server
                }
            })
            .catch(error => {
                if (error.response) {
                    toast.error(error.response.data.error);  // Display error from the server
                } else {
                    toast.error('Error: Could not connect to server.');  // Display connection error
                }
            });
    };

    return (
        <section>
            <div className="flex h-screen md:flex-row flex-col">
                <div className="w-full md:w-1/2 bg-[#e9f6f591] md:px-4">
                    <div className="h-screen flex items-center justify-center">
                        <div className="grid">
                            <h2 className="text-3xl font-bold leading-tight text-[black] sm:text-4xl">Login</h2>
                            <p className="mt-2 text-base text-[#fb6822] mb-5">
                                Don't have an account?{' '}
                                <Link to="/signup" title="" className="font-semibold text-black transition-all duration-200 hover:underline">
                                    Create a free account
                                </Link>
                            </p>

                            <form onSubmit={handleLogin}>
                                <div className="flex flex-col gap-2 text-lg">
                                    <p>Email Address</p>
                                    <input 
                                        className="w-full rounded-lg px-2 py-2 bg-inherit border-2 border-[#fb6822]" 
                                        type="email" 
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="flex flex-col gap-2 mt-5">
                                    <div className="flex justify-between">
                                        <p className="text-lg">Password</p>
                                        <Link to="#" title="" className="font-semibold text-black transition-all duration-200 hover:underline">
                                            Forgot your password?
                                        </Link>
                                    </div>
                                    <input
                                        className="w-full rounded-lg px-2 py-2 bg-inherit border-2 border-[#085ca6]"
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="mb-3 mt-5 inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                                >
                                    Log In
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/2 bg-[#a5c0dd] flex justify-center items-center">
                    <img src={hotWeatherImage} alt="Hot Weather" className="h-auto" />
                </div>
                
            </div>

            <ToastContainer />
        </section>
    );
};

export default Login;
