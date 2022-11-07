import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../Shared/SocialLogin';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
    const [userEmail, setUserEmail] = useState('');
    const [error, setError] = useState('');
    const { login, setLoading, resetPassword } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true });
                toast.success("Your log in has been successful")
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
                toast.error(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }
    // reset password
    const handleReset = () => {
        resetPassword(userEmail)
            .then(() => {
                toast.success('Reset link has been sent, please check email')
            })
            .catch(error => toast.error(error.message))
    }
    return (
        <div className="md:w-1/2 lg:w-1/4 mx-auto flex flex-col gap-4 mt-5 mb-24 shadow-2xl p-5">
            <form onSubmit={handleSubmit} >
                <h3 className="text-2xl text-center font-semibold">Login</h3>
                <div className='my-5'>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email2"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        onBlur={e => setUserEmail(e.target.value)}
                        id="email2"
                        type="email"
                        placeholder="Your Name"
                        name='email'
                        required={true}
                        shadow={true}
                    />
                </div>
                <div className='my-2'>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password2"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        id="password2"
                        type="password"
                        placeholder='Your Password'
                        name='password'
                        required={true}
                        shadow={true}
                    />
                </div>
                <p className='mt-5'>Don't Have Account? <Link to='/signup'><span className='text-blue-500'>register here</span></Link></p>
                <p className='text-red-500'>{error}</p>
                <Button className='w-full mt-5' type="submit">
                    Login
                </Button>
            </form>
            <p className='mt-3 text-lg font-semibold'>Forget Password
                <button
                    onClick={handleReset} className='text-blue-500'>
                    Click Here
                </button>
            </p>
            <p className='text-center'>Or,</p>
            <SocialLogin />
        </div>

    );
};

export default Login;