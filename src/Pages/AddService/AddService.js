import { Button } from 'flowbite-react';
import React from 'react';
import useTitle from '../../hooks/useTitle';

const AddService = () => {
    useTitle('Add Service');
    const handleAddService = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const img = form.img.value;
        const descriprion = form.descriprion.value;
        const rating = form.rating.value;
        console.log(name, price, img, descriprion, rating);
    }
    return (
        <div className='w-10/12 lg:w-1/2 mx-auto shadow-lg p-10 rounded' >
            <p className='text-3xl text-center font-semibold'>
                Add A New Service
            </p>
            <form onSubmit={handleAddService} className='flex flex-col' >
                <input className='w-11/12 mx-auto my-2 rounded lg' placeholder='Service Name' type="text" name="name" id="" />
                <br />
                <input className='w-11/12 mx-auto my-2 rounded lg' placeholder='Service Price' type="text" name="price" id="" />
                <br />
                <input className='w-11/12 mx-auto my-2 rounded lg' placeholder='Service Image URL' type="text" name="img" id="" />
                <br />
                <textarea className='w-11/12 mx-auto my-2 rounded lg' placeholder='Service Description' name="descriprion" id="" cols="30" rows="10"></textarea>
                <br />
                <div className='' >
                    <p className='text-red-600 text-xl font-bold '>Rating:</p>
                    <select className='my-5 rounded-lg' name="rating" id="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <Button type='submit'>Add Service</Button>
            </form>
        </div>
    );
};

export default AddService;