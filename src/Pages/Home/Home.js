import React from 'react';
import useTitle from '../../hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            this is home
        </div>
    );
};

export default Home;