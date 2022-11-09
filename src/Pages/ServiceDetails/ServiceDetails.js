import { Button, Card } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, Navigate, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import 'react-photo-view/dist/react-photo-view.css';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import ReviewCard from './ReviewCard';


const ServiceDetails = () => {
    useTitle('Service Details');
    const service = useLoaderData();
    const { user } = useContext(AuthContext);
    console.log(user);
    const [reviews, setReviews] = useState([]);
    const { _id, name, price, img, descriprion, rating } = service;

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${_id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [_id])

    // review submit
    const handleReviewSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const review = form.review.value;
        console.log(review);

        const reviewData = {
            service: _id,
            serviceName: name,
            serviceImg: img,
            review,
            userEmail: user.email,
            userName: user.displayName,
            userImg: user.photoURL,
            insertionTime: new Date()
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(reviewData)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Your review posted successfully')
                    form.reset();
                    const newReview = [reviewData, ...reviews];
                    setReviews(newReview);
                }
            })
            .catch(err => {
                console.error(err);
                toast.error('Failed to post review')
            })
    }
    return (
        <div className='w-11/12 mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2'>
                <Card>
                    <div className='w-full h-full'>
                        <PhotoProvider>
                            <PhotoView src={img}>
                                <img className='w-full' src={img} alt="" />
                            </PhotoView>
                        </PhotoProvider>
                    </div>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {name}
                    </h5>
                    <div className='flex justify-between'>
                        <p className='text-blue-700 font-semibold'>Price: {price} Taka</p>
                        <p className='flex text-yellow-400 items-center'>Rating: {rating} <FaStar className='ml-2'></FaStar></p>
                    </div>
                    <h3 className='text-3xl font-bold text-sky-500 mx-2 rounded text-center'>Details</h3>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {
                            descriprion
                        }
                    </p>
                </Card>
            </div>
            {/* review section */}
            <div className='w-11/12 mx-auto'>
                <h3 className='text-3xl font-bold text-sky-500 mx-2 rounded text-center'>Reviews</h3>
                <div>
                    {
                        reviews.map(
                            singleReview =>
                                <ReviewCard
                                    key={singleReview.insertionTime}
                                    singleReview={singleReview}>
                                </ReviewCard>
                        )
                    }
                </div>
                <div>
                    <h3 className='text-2xl font-bold text-sky-500 mx-2 rounded text-center my-5'>Write Your Review</h3>
                    {
                        user?.uid ?
                            <form onSubmit={handleReviewSubmit} className='flex flex-col w-11/12 mx-auto'>
                                <textarea
                                    className='rounded-lg'
                                    name='review'
                                    placeholder='Write your review here'
                                />
                                <Button type='submit' className='my-5'>Submit Review</Button>
                            </form>
                            :
                            <Link to="/login">
                                <Button className='mx-auto' >
                                    Please login to add a review
                                </Button>
                            </Link>
                    }
                </div>

            </div>
        </div>
    );
};

export default ServiceDetails;