import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider'
import ReviewDetails from './ReviewDetails';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const MyReviews = () => {
    useTitle('My Reviews');
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    console.log(reviews);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json()
            })
            .then(data => setReviews(data))
    }, [user?.email, logOut])

    //   review delete

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this review');

        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
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
    // review update

    const handleUpdate = id => {
        navigate(`/updateReview/${id}`)
    }

    return (
        <div>
            {
                reviews.length === 0
                    ?
                    <p className='text-center text-blue-700 text-2xl font-bold my-48 md:my-72'>No Reviews Were Added</p>
                    :
                    reviews.map(singleReview => <ReviewDetails
                        key={singleReview._id}
                        singleReview={singleReview}
                        handleDelete={handleDelete}
                        handleUpdate={handleUpdate}
                    ></ReviewDetails>)
            }
        </div>
    );
};

export default MyReviews;