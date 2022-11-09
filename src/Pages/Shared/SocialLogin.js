import { Button } from 'flowbite-react';

import React, { useContext } from 'react';
import toast from 'react-hot-toast';
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
                const currentUser = {
                    email: user.email
                };

                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('token', data.token);
                        navigate(from, { replace: true });
                        toast.success("Your log in has been successful")
                    })

            })
            .catch(error => {
                console.error(error);
            })

    }

    return (
        <div className='mb-2' >
            <Button onClick={handleGoogleLogin} gradientMonochrome="success" className=' w-full'><FcGoogle className='mr-1' />  Signin With Google </Button>
        </div >
    );
};

export default SocialLogin;