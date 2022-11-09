import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider'
import ReviewDetails from './ReviewDetails';
import toast from 'react-hot-toast';

const MyReviews = () => {
    useTitle('My Reviews');
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    console.log(reviews);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => {
                return res.json()
            })
            .then(data => setReviews(data))
    }, [user?.email])

    //   review delete

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this review');

        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Review deleted Successfully');
                        const remaining = reviews.filter(rv => rv._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }
    return (
        <div>
            {
                reviews.length === 0
                    ?
                    <p className='text-center text-blue-700 text-2xl font-bold'>No Reviews Were Added</p>
                    :
                    reviews.map(singleReview => <ReviewDetails
                        key={singleReview._id}
                        singleReview={singleReview}
                        handleDelete={handleDelete}
                    ></ReviewDetails>)
            }
        </div>
    );
};

export default MyReviews;