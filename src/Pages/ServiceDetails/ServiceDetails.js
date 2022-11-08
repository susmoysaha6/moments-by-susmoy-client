import { Card } from 'flowbite-react';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import 'react-photo-view/dist/react-photo-view.css';


const ServiceDetails = () => {
    useTitle('Service Details');
    const service = useLoaderData();

    const { _id, name, price, img, descriprion, rating } = service;
    return (
        <div className='w-11/12 mx-auto grid lg:grid-cols-4'>
            <div className='col-span-3'>
                <Card>
                    <div className='w-full h-full'>
                        <PhotoProvider>
                            <PhotoView src={img}>
                                <img src={img} alt="" />
                            </PhotoView>
                        </PhotoProvider>
                    </div>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {name}
                    </h5>
                    <div className='flex justify-between'>
                        <p className='text-blue-700 font-semibold'>Price: {price} Taka</p>
                        <p className='flex text-yellow-400 items-center'>Rating: {rating} <FaStar className='ml-2'></FaStar></p>
                    </div>
                    <h3 className='text-3xl font-bold text-sky-500 mx-2 rounded text-center'>Details</h3>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {
                            descriprion
                        }
                    </p>

                </Card>
            </div>
            <div>
                reviews
            </div>
        </div>
    );
};

export default ServiceDetails;