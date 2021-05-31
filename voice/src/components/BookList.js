import React, { useContext } from 'react';
import BookDetails from './BookDetails';
import { BookContext } from '../contexts/BookContext';

const BookList = () => {
  
  const { books } = useContext(BookContext);
  return books.length ? (
    <div id="posts" className="formdiv">
      <div >
        {books.map(book => {
          return ( <BookDetails book={book} key={book.id} /> );
        })}
      </div>
      
    </div>
  ) : (
    <div className="empty">No posts have been added.</div>
  );
}

export default BookList;