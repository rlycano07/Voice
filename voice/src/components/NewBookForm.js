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
      <div id ="create" className="formdiv">
        <div className='formtitle'>
          Create a new Discussion.
        </div>
      <form onSubmit={handleSubmit}>
        
        <input type="text" placeholder="Title" value={title}
          onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Subject" value={subject}
          onChange={(e) => setSubject(e.target.value)} required ></input> 
        <textarea className="textarea" placeholder="Describe your topic" value={describe}
          onChange={(e) => setDescribe(e.target.value)} required></textarea>
        <input type="text" placeholder="Full Name" value={author}
          onChange={(e) => setAuthor(e.target.value)} required />
        <input type="submit" />
      </form>
    </div>
  );
}
 
export default NewBookForm;