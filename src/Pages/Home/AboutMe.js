import React from 'react';

const AboutMe = () => {
    return (
        <div className='w-3/4 mx-auto grid md:grid-cols-2 shadow'>
            <div className='w-full'>
                <img className='w-full h-full' src="https://i.ibb.co/GVGBj62/susbg.png" alt="" />
            </div>
            <div className='my-10 xl:mt-20'>
                <h1 className="text-3xl text-center md:text-start my-5 px-5 text-sky-500 font-semibold">About Me</h1>
                <p className='text-lg text-slate-500 font-semibold px-5 mb-2 xl:w-3/4'>Hello everyone, this is Susmoy form MOMENTS BY SUSMOY. I have passionate about photography from childhood. While , I was in university I bought a camera and started photoshoot. At that time I usually shoot  nature and wildlife. Then I move to modeling and product photography. Then I stated doing event like wedding, birthday , concert so on. I've different type of camera and lenses</p>
            </div>
        </div>
    );
};

export default AboutMe;