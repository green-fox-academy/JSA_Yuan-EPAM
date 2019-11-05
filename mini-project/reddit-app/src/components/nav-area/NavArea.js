import React from 'react';

function NavArea(props) {
    return (
        <div className="nav-area">
            <button type="button" name="submit button">SUBMIT A NEW POST</button>
            <p>About xxxx</p>
            <div className="related-topic">
                <p>Share & discuss informative (related) content on: </p>
                <ul>
                    <li>A</li>
                    <li>B</li>
                    <li>C</li>
                    <li>D</li>
                    <li>E</li>
                </ul>
            </div>
        </div>
    )
}

export default NavArea;