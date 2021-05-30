import React from 'react'

import AppHero from '../components/home/hero'
import AppAbout from '../components/home/about'
import AppFeature from '../components/home/feature'
import AppWorks from '../components/home/work'
import AppForm from '../components/home/form'
import BookContextProvider from '../contexts/BookContext';
import BookList from '../components/BookList';
import NewBookForm from '../components/NewBookForm';
// import Comments from '../components/home/comments'
// import AppPosts from '../components/home/posts'
function AppHome() {
    return (
        <div className="main">
            
            <BookContextProvider>
            <AppHero/>
            <NewBookForm />
            <AppAbout/>
            <AppWorks/>
            {/* <Comments /> */}
            {/* <AppForm/> */}
            <AppFeature/>
            {/* <AppPosts/> */}
                <BookList />
                
            </BookContextProvider>
        </div>
    );
}

export default AppHome;
