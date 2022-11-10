import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import ServiceCard from '../Shared/ServiceCard';

const Services = () => {
    useTitle('Services')
    const [isloading, setIsLoading] = useState(true);
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://photography-services-server.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setIsLoading(true);
                setServices(data);
                setIsLoading(false);
            })

    }, [])


    console.log(services);
    return (
        <div>
            {
                isloading
                    ?
                    <div className="w-16 h-16 mx-auto my-32 border-4 border-dashed border-sky-700 rounded-full animate-spin dark:border-sky-400 "></div>
                    :
                    <div>
                        <p className='my-5 text-3xl text-center text-blue-700 font-bold'>All Services By Me</p>
                        <div className='w-3/4 mx-auto my-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            {
                                services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                            }
                        </div>
                    </div>
            }

        </div>
    );
};

export default Services;