import React from 'react';

const Achivements = () => {
    return (
        <div>
            <h1 className='text-2xl text-slate-600 font-semibold text-center'>My Achievements</h1>
            <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
                <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">300+</p>
                        <p className="text-sm sm:text-base">Event Done</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">100K</p>
                        <p className="text-sm sm:text-base">Followers on Facebook</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">3</p>
                        <p className="text-sm sm:text-base">Awards</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">8</p>
                        <p className="text-sm sm:text-base">Seminar on photograpy</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">5</p>
                        <p className="text-sm sm:text-base">Years of experience</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">15</p>
                        <p className="text-sm sm:text-base">Workshops</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Achivements;