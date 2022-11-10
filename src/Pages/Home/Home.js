
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Banner from './Banner';
import ServiceCard from '../Shared/ServiceCard';
import { Button } from 'flowbite-react';
import AboutMe from './AboutMe';
import MyWorks from './MyWorks';



const Home = () => {
    useTitle('Home')
    const services = useLoaderData();
    console.log(services);
    return (
        <div>
            {/* banner Section*/}
            <Banner></Banner>
            {/* Display service data */}
            <p className='my-5 text-3xl text-center text-blue-700 font-bold'>My Services</p>
            <div className='w-3/4 mx-auto my-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <Link to="/services">
                <Button className='mx-auto mb-10'>
                    Load More Services
                </Button>
            </Link>
            {/* About Me Section */}
            <AboutMe></AboutMe>
            {/* {My works section} */}
            <MyWorks></MyWorks>
        </div>
    );
};

export default Home;