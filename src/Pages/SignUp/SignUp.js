import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const { createUser, updateUserProfile, } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

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

    }
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
        <form onSubmit={handleSubmit} className="md:w-1/2 lg:w-1/4 mx-auto flex flex-col gap-4 my-5 shadow-2xl p-5">
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
            <p>Already have an account? <Link to='/login'><span className='text-blue-500'>Login</span></Link></p>
            <p className='text-red-500'>{error}</p>
            <Button type="submit">
                Sign Up
            </Button>
        </form>
    );
};

export default SignUp;