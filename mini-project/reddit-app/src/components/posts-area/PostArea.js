import React from 'react';
import Post from './Post';


function PostArea(props) {
    return (
        <div className='posts-area'>
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default PostArea;