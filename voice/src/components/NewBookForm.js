import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const NewBookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [subject, setSubject] = useState('');
  const [describe, setDescribe] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_BOOK', book: { title, author }});
    setTitle('');
    setAuthor('');
    setSubject('');
    setDescribe('');
  }

  return (
      <div className="formdiv">
        <div className='formtitle'>
          Add posts
        </div>
      <form onSubmit={handleSubmit}>
        Share new posts on the Voice:
        <input type="text" placeholder="Title" value={title}
          onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Subject" value={subject}
          onChange={(e) => setSubject(e.target.value)} required ></input> 
        <input type="text" placeholder="Describe your topic" value={describe}
          onChange={(e) => setDescribe(e.target.value)} required></input>
        <input type="text" placeholder="Full Name" value={author}
          onChange={(e) => setAuthor(e.target.value)} required />
        <input type="submit" />
      </form>
    </div>
  );
}
 
export default NewBookForm;