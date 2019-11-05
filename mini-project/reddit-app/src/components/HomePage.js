import React from 'react';

import HeaderBackground from './header/HeaderBackground';
import PostArea from './posts-area/PostArea';
import NavArea from './nav-area/NavArea';

import Data from '../Data'
import '../static/homepage.css'

function HomePage() {
    let headerImage = Data['header-background'];
    // console.log('home page ')
    // console.log(headerImage);

    return (
        <div id="home-page">
            <HeaderBackground imagePath={headerImage} />
            {/* <div className="header"> */}
            {/* <HeaderBackground imagePath={headerImage} /> */}
            {/* </div> */}
            {/* <div className="posts-area"> */}
            <PostArea />
            {/* </div> */}
            {/* <div className="nav-area"> */}
            <NavArea />
            {/* </div> */}
        </div>
    )
}

export default HomePage;