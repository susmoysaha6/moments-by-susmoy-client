import { useTheme } from 'flowbite-react';
import React from 'react';
import useTitle from '../../hooks/useTitle';

const Services = () => {
    useTheme('dark')
    useTitle('Services')
    return (
        <div>
            service
        </div>
    );
};

export default Services;