import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);
    }
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

            <Button type="submit">
                Sign Up
            </Button>
        </form>
    );
};

export default SignUp;