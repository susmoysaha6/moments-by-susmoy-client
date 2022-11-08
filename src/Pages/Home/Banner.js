import { Button } from 'flowbite-react';
import React from 'react';
import logo from '../../assets/logo.png'
import reception from '../../assets/banner/reciption.png'

const Banner = () => {
    return (
        <div>
            <div className='w-full mx-auto flex flex-col items-start md:items-center lg:flex-row justify-center '>
                <div>
                    <img src={reception} alt="" />
                </div>
                <div className='my-5 ml-5'>
                    <img width={100} src={logo} alt="" />
                    <h1 className='md:text-3xl text-slate-700 font-bold flex'>Welcome <br /> to <br /> "MOMENTS BY SUSMOY"</h1>
                    <p className='text-slate-700 text-lg'>I capture your dream moments</p>
                    <Button gradientMonochrome='info' className='my-5' >Book Now</Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;