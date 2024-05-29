import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = ({ searchBook }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://reactnd-books-api.udacity.com/books', {
          headers: { 'Authorization': 'whatever-you-want' }
        });
        setBooks(response.data.books);
      } catch (error) {
        console.error('Error fetching the books data:', error);
      }
    };
    fetchBooks();
  }, []);

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchBook.toLowerCase())
  );

  return (
    <div className="book-list">
      {filteredBooks.map(book => (
        <div key={book.id} className="book-item">
          <div className="book-details">
            <div>
              <img src={book.imageLinks?.thumbnail} alt={book.title} />
            </div>
            <h2 className="book-title">{book.title}</h2>
            <p className="book-authors"><strong>Authors:</strong> {book.authors.join(', ')}</p>
            {book.averageRating && (
              <p className="book-rating"> {book.averageRating}★ Free</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
