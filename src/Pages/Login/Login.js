import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../Shared/SocialLogin';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';


const Login = () => {
    const [userEmail, setUserEmail] = useState('');
    const [error, setError] = useState('');
    const { login, setLoading, resetPassword, loading } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    console.log(from);
    useTitle('Login')

    if (loading) {
        return <div className="w-16 h-16 mx-auto my-32 border-4 border-dashed border-sky-700 rounded-full animate-spin dark:border-sky-400 "></div>
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;


        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                const currentUser = {
                    email: user.email
                }
                console.log(currentUser);
                fetch('https://photography-services-server.vercel.app/jwt', {
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
                        form.reset();
                        setError('');
                        toast.success("Your log in has been successful")
                    })
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

        < div className="md:w-1/2 lg:w-1/4 mx-auto flex flex-col gap-4 mt-20 mb-72 shadow-2xl p-5" >
            {/* Login form */}
            < form onSubmit={handleLoginSubmit} >
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
                <p className='mt-5'>Don't Have Account? <Link to='/signup'><span className='text-blue-600 font-semibold'>Sign Up here</span></Link></p>
                {/* error message */}
                <p className='text-red-500'>{error}</p>
                <Button className='w-full mt-5' type="submit">
                    Login
                </Button>
            </form >
            {/* Reset password */}
            < p className='mt-3 text-lg font-semibold' > Forget Password
                < button
                    onClick={handleReset} className='text-blue-600 ml-2' >
                    Click Here
                </button >
            </p >
            {/* sign in with google */}
            < p className='text-center' > Or,</p >
            <SocialLogin />
        </div >
    );
};

export default Login;