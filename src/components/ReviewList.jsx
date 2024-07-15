import React, { useEffect, useState } from 'react';
import { getAllReviews } from '../services/book';

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getAllReviews();
        setReviews(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div>
      <h2>Review List</h2>
      <ul>
        {reviews.map(review => (
          <li key={review._id}>
            <strong>{review.userId}:</strong> {review.reviewText} - {review.rating} stars
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
