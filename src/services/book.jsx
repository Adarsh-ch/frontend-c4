import api from './api';

export const getAllBooks = () => {
  return api.get('/books').then(response => response.data);
};

export const getBookById = (bookId) => {
  return api.get(`/books/${bookId}`).then(response => response.data);
};

export const postReview = (review) => {
  return api.post('/reviews', review).then(response => response.data);
};

export const getAllReviews = () => {
  return api.get('/reviews').then(response => response.data);
};
