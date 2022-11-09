import React from 'react';

const ReviewCard = ({ singleReview }) => {
    const { userName, userImg, review, insertionTime } = singleReview;

    return (
        <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
            <div className="flex justify-between p-4">
                <div className="flex items-center space-x-4">
                    <div>
                        <img src={userImg} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                    </div>
                    <div>
                        <h4 className="font-bold">{userName}</h4>
                    </div>
                </div>
            </div>
            <div className="p-4 space-y-2 text-sm">
                <p>{review}</p>
            </div>
        </div>
    );
};

export default ReviewCard;