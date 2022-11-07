import { Button } from 'flowbite-react';
import React from 'react';
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
    return (
        <div className='mb-2' >
            <Button gradientMonochrome="success" className=' w-full'><FcGoogle className='mr-1' />  Signin With Google </Button>
        </div >
    );
};

export default SocialLogin;