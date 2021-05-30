import React, { useContext, useReducer } from 'react';
// import { BookContext } from '../contexts/BookContext';

const initialState =0;
const reducer =(state, action) => {
  switch(action){
    case 'like':
      return state +1;
    case 'dislike':
      return state -1
    default:
      return state
  }
}


const BookDetails = ({ book }) => {
  // const { dispatch } = useContext(BookContext);
  const [count, dispatch] = useReducer (reducer, initialState)
  useReducer(reducer, initialState)
  return (
    
    <div className="addedpost">
      <div className="count">
        <div>{count}</div>
        <button onClick={() => dispatch('like')}className="like" >Λ</button>
        <button onClick={() => dispatch('dislike')}className="dislike">V</button></div>
      {/* <div onCdivck={() => dispatch({ type: 'REMOVE_BOOK', id: book.id })}> */}
      <div>
        <div className="posttitle">{book.title}</div>
        <div className="author">- {book.author}</div>
      </div>
    </div>
  );
}

export default BookDetails;