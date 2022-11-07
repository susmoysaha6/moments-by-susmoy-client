import { Button } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Log out successfully')
            })
            .catch(error => console.error(error))
    }

    return (
        <div className="px-4 mb-12 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 sticky top-0 bg-slate-200 text-slate-700  z-50 h-fit">
            <div className="relative flex items-center justify-between">
                <Link
                    to="/"
                    aria-label="Company"
                    title="Company"
                    className="inline-flex items-center"
                >
                    <img width={50} src={logo} alt="" />
                    <span className="ml-2 md:text-2xl font-bold tracking-wide uppercase">
                        Susmoy Photography
                    </span>
                </Link>
                <ul className=" items-center hidden space-x-8 lg:flex">
                    <Link to="/" >
                        <p className='text-2xl font-semibold'>
                            Home
                        </p>
                    </Link>
                    <Link to="/services" >
                        <p className='text-2xl font-semibold'>
                            Services
                        </p>
                    </Link>
                    {
                        user?.uid ?
                            <>
                                <Link to="/reviews" >
                                    <p className='text-2xl font-semibold'>
                                        Reviews
                                    </p>
                                </Link>
                                <Link to="/add-service" >
                                    <p className='text-2xl font-semibold'>
                                        Add Sevices
                                    </p>
                                </Link>
                                <Button gradientMonochrome="info" onClick={handleLogOut}>Log Out</Button>
                            </>
                            :
                            <Link to="/login" >
                                <p className='text-2xl font-semibold'>
                                    Login
                                </p>
                            </Link>
                    }



                </ul>
                <div className="lg:hidden">
                    <button
                        aria-label="Open Menu"
                        title="Open Menu"
                        className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                            />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div className="absolute top-0 left-0 w-full z-50 h-fit ">
                            <div className="p-5 border rounded shadow-sm bg-white dark:bg-slate-800">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <Link
                                            to="/"
                                            aria-label="Company"
                                            title="Company"
                                            className="inline-flex items-center"
                                        >
                                            <img width={50} src={logo} alt="" />
                                            <span className="ml-2 md:text-xl font-bold tracking-wide uppercase">
                                                Susmoy Photography
                                            </span>
                                        </Link>
                                    </div>
                                    <div>
                                        <button
                                            aria-label="Close Menu"
                                            title="Close Menu"
                                            className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className='flex flex-col'>
                                        <Link to="/" >
                                            <p className='text-lg font-semibold'>
                                                Home
                                            </p>
                                        </Link>
                                        <Link to="/services" >
                                            <p className='text-lg font-semibold'>
                                                Services
                                            </p>
                                        </Link>
                                        {
                                            user?.uid ?
                                                <>
                                                    <Link to="/reviews" >
                                                        <p className='text-lg font-semibold'>
                                                            Reviews
                                                        </p>
                                                    </Link>
                                                    <Link to="/add-service" >
                                                        <p className='text-lg font-semibold'>
                                                            Add Sevices
                                                        </p>
                                                    </Link>
                                                    <Button onClick={handleLogOut} gradientMonochrome="info" className='w-1/2 mx-auto my-5'>Log Out</Button>
                                                </>
                                                :
                                                <Link to="/login" >
                                                    <p className='text-lg font-semibold'>
                                                        Login
                                                    </p>
                                                </Link>
                                        }

                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;