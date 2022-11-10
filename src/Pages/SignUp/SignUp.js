import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const SignUp = () => {
    const { createUser, updateUserProfile, setLoading, loading } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    useTitle('Sign Up')

    if (loading) {
        return <div className="w-16 h-16 mx-auto my-32 border-4 border-dashed border-sky-700 rounded-full animate-spin dark:border-sky-400 "></div>
    }

    // Sign up
    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                navigate('/');
                form.reset();
                handleUpdateUserProfile(name, photoURL)
                toast.success('Your has been created successfully.')
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
                toast.error(error.message);
            })
            .finally(() => {
                setLoading(false)
            })

    }
    // update user
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => {
                console.error(error);
            })
    };
    return (
        <form onSubmit={handleSignUpSubmit} className="md:w-1/2 lg:w-1/4 mx-auto flex flex-col gap-4 mt-20 mb-72 shadow-2xl p-5">
            <h3 className="text-2xl text-center font-semibold">Sign Up</h3>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="name"
                        value="Your Name"
                    />
                </div>
                <TextInput
                    id="name"
                    type="text"
                    placeholder="Enter Your Name"
                    name='name'
                    required={true}
                    shadow={true}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="photo"
                        value="Your Photo URL"
                    />
                </div>
                <TextInput
                    id="photo"
                    type="text"
                    placeholder="Enter Your Photo URL"
                    name='photoURL'
                    required={true}
                    shadow={true}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="email2"
                        value="Your email"
                    />
                </div>
                <TextInput
                    id="email2"
                    type="email"
                    placeholder="Enter Your Email"
                    name='email'
                    required={true}
                    shadow={true}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="password2"
                        value="Your password"
                    />
                </div>
                <TextInput
                    id="password2"
                    type="password"
                    placeholder='Password'
                    name='password'
                    required={true}
                    shadow={true}
                />
            </div>
            <p>Already have an account? <Link to='/login'><span className='text-blue-600 font-semibold'>Login Here</span></Link></p>
            {/* Error Message */}
            <p className='text-red-500'>{error}</p>
            <Button type="submit">
                Sign Up
            </Button>
        </form>
    );
};

export default SignUp;