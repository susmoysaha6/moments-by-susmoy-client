import React from 'react';

const ReviewCard = ({ singleReview }) => {
    const { userName, userImg, review } = singleReview;

    return (
        <div className="p-8 sm:flex sm:space-x-6 dark:bg-gray-900 dark:text-gray-100 shadow w-full mx-auto">
            <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                <img src={userImg} alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
            </div>
            <div className="flex flex-col space-y-4 ml-2">
                <div>
                    <h2 className="text-xl font-semibold text-blue-700">{userName}</h2>
                    <span className="text-sm dark:text-gray-400">{review}</span>
                </div>

            </div>
        </div>
        // <div className='flex items-center w-11/12'>
        //     <div className='ml-2'>
        //         <img src={userImg} className=" w-full  rounded" alt="User Img" />
        //     </div>
        //     <div className='ml-2'>
        //         <p className='text-xl font-semibold'>Name: {userName}</p>
        //         <p>{review}</p>
        //     </div>
        // </div>
    );
};

export default ReviewCard;