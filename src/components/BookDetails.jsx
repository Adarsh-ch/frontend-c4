import React, { useEffect, useState } from 'react';
import { getBookById } from '../services/book';

const BookDetails = ({ match }) => {
  const [book, setBook] = useState(null);
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

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Description:</strong> {book.description}</p>
    </div>
  );
};

export default BookDetails;
