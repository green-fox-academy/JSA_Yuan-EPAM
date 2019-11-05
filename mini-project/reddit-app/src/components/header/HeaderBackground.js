import React from 'react';

function HeaderBackground (props) {
    let image = props.imagePath;
    console.log('header background');
    console.log(image);

    return (
        <div className='header-image'>
            {/* <img src= {image} alt="header background" /> */}
        </div>
    )
}

export default HeaderBackground;