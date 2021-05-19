import React from 'react'

import AppHero from '../components/home/hero'
import AppAbout from '../components/home/about'
import AppFeature from '../components/home/feature'
import AppWorks from '../components/home/work'
import AppForm from '../components/home/form'

function AppHome() {
    return (
        <div className="main">
            <AppHero/>
            <AppAbout/>
            <AppWorks/>
            <AppForm/>
            <AppFeature/>
        </div>
    );
}

export default AppHome;
