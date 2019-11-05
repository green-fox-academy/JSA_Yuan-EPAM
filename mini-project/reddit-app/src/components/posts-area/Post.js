import React from 'react';

import Vote from './Vote';

function Post(props) {

    return (
        <div className="post">
            <Vote />
            <section class="post-content">
                <h1>Post Title</h1>
                <p>submitted xxxx ago by xxxx</p>
                <p>xxx comment(s)</p>
            </section>
        </div>
    )
}

export default Post;