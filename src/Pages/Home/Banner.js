import { Button } from 'flowbite-react';
import React from 'react';
import logo from '../../assets/logo.png'
import reception from '../../assets/banner/reciption.png'

const Banner = () => {
    return (
        <div>
            <div className='w-full md:w-3/4 mx-auto grid lg:grid-cols-2 shadow-lg bg-slate-800'>
                <div className='w-full'>
                    <img className='w-full h-full' src={reception} alt="" />
                </div>
                <div className='my-10 ml-5'>
                    <img width={100} src={logo} alt="" />
                    <h1 className='md:text-3xl text-slate-200 font-bold flex my-2'>Welcome <br /> to <br /> "MOMENTS BY SUSMOY"</h1>
                    <p className='text-slate-200 text-lg my-2'>I capture your dream moments</p>
                    <Button gradientMonochrome='info' className='my-2' >Book Now</Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;