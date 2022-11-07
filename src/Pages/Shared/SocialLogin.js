import { Button } from 'flowbite-react';

import React, { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    // sign in with google
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })

    }

    return (
        <div className='mb-2' >
            <Button onClick={handleGoogleLogin} gradientMonochrome="success" className=' w-full'><FcGoogle className='mr-1' />  Signin With Google </Button>
        </div >
    );
};

export default SocialLogin;