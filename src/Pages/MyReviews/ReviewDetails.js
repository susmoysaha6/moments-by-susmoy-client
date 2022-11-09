import { Button } from 'flowbite-react';
import React from 'react';

const ReviewDetails = ({ singleReview }) => {
    const { review, serviceName,
        serviceImg } = singleReview;
    return (
        <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
            <div className="flex justify-between p-4">
                <div className="flex items-center space-x-4">
                    <div>
                        <img src={serviceImg} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                    </div>
                    <div>
                        <h4 className="font-bold">{serviceName}</h4>
                    </div>
                </div>
                <div className="flex items-center space-x-2 dark:text-yellow-500">
                    <Button color="success">Update</Button>
                    <Button color="failure">X</Button>
                </div>
            </div>
            <div className="p-4 space-y-2  font-bold">
                <p>{review}</p>
            </div>
        </div>
    );
};

export default ReviewDetails;