import React, { useEffect, useState } from 'react';
import { getBookById } from '../services/book';
import { postReview } from '../services/book';
import BookDetails from '../components/BookDetails';
import ReviewList from '../components/ReviewList';

const BookPage = ({ match }) => {
  const [book, setBook] = useState(null);
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(1);
  const bookId = match.params.bookId;

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const data = await getBookById(bookId);
        setBook(data);
      } catch (error) {
        console.error('Error fetching book:', error);
      }
    };

    fetchBook();
  }, [bookId]);

  const handleSubmitReview = async (event) => {
    event.preventDefault();
    try {
      await postReview({ bookId, reviewText, rating });
      setReviewText('');
      setRating(1);
    } catch (error) {
      console.error('Error posting review:', error);
    }
  };

  return (
    <div>
      {book ? <BookDetails book={book} /> : <p>Loading...</p>}
      <h3>Add a Review</h3>
      <form onSubmit={handleSubmitReview}>
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Write your review here"
        />
        <input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        />
        <button type="submit">Submit Review</button>
      </form>
      <ReviewList />
    </div>
  );
};

export default BookPage;
