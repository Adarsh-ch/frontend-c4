import React, { useEffect, useState } from 'react';
import { getAllBooks } from '../services/book';
import { Link } from 'react-router-dom';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await getAllBooks();
        console.log('Fetched books:', data);  
        setBooks(Array.isArray(data) ? data : []);  
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.length === 0 ? (
          <li>No books available</li>
        ) : (
          books.map(book => (
            <li key={book._id}>
              <Link to={`/book/${book._id}`}>{book.title} by {book.author}</Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default BookList;
