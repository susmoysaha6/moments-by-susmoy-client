import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const UpdateReview = () => {
    const { id } = useParams();
    const [review, setReview] = useState({})
    // const { serviceImg, serviceName, review } = review
    useEffect(() => {
        fetch(`http://localhost:5000/review/${id}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [id])

    console.log(id);

    const handleUpdateReview = (e) => {
        e.preventDefault();
        const form = e.target;
        const review = form.review.value;
        console.log(review);

        const updatedReview = {
            review
        }

        fetch(`http://localhost:5000/review/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Your Review Updated Successfully')
                }
            })
            .catch(err => console.error(err))
    }

    return (
        <div className='my-12 lg:w-1/2 mx-auto p-5 shadow'>
            <h1 className='text-center text-xl font-semibold my-10'>Update your review for service {review.serviceName}</h1>
            <img className='' src={review.serviceImg} alt="" />
            <form onSubmit={handleUpdateReview} className='w-11/12  mx-auto '>
                <textarea className='w-full my-2 rounded-lg border-gray-400 text-lg' name="review" id="" rows='5' defaultValue={review.review} ></textarea>
                <Button type='submit' className='my-5 w-1/2 mx-auto'>Update Review</Button>
            </form>
        </div>
    );
};

export default UpdateReview;