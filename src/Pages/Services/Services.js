import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import ServiceCard from '../Shared/ServiceCard';

const Services = () => {
    useTitle('Services')
    const services = useLoaderData();
    console.log(services);
    return (
        <div>
            <p className='my-5 text-3xl text-center text-blue-700 font-bold'>All Services By Me</p>
            <div className='w-3/4 mx-auto my-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;