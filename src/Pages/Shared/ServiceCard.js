import { Button, Card } from 'flowbite-react';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, name, price, img, descriprion, rating } = service;
    return (
        <div className="max-w-sm">
            <Card>
                <div className='w-full h-full'>
                    <img src={img} alt="" />
                </div>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {
                        descriprion.length > 100 ? descriprion.slice(0, 100) : descriprion
                    }... <Link to={`/service/${_id}`}> read more</Link>
                </p>
                <div className='flex justify-between'>
                    <p className='text-blue-700 font-semibold'>Price: {price} Taka</p>
                    <p className='flex text-yellow-400 items-center'>Rating: {rating} <FaStar className='ml-2'></FaStar></p>
                </div>
                <Link to={`/service/${_id}`}>
                    <Button className='w-full'>
                        View Details
                    </Button>
                </Link>
            </Card>
        </div>
    );
};

export default ServiceCard;