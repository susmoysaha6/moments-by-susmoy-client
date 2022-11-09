import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider'
import ReviewDetails from './ReviewDetails';

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

    console.log(user.displayName);
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
                    ></ReviewDetails>)
            }
        </div>
    );
};

export default MyReviews;