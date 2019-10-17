import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

import "./GalleryApp.css"
import navIcon from "./nav-icon.svg";
import DATA from "./Data";

function Content(props) {
    let { id } = useParams;
    let image = DATA[4];

    return (
        <div className="content">
            <NavBar direction="left" />
            <Image path={image.path} />
            <NavBar direction="right" />
        </div>
    )
}

function Image(props) {
    console.log(props.path);

    return (
        <div className="images">
            <img src={props.path} />
            <ImageDescription />
        </div>
    )
}

function ImageDescription(props) {

    return (
        <div className="img-description">
            Imgage description area
        </div>
    )
}

function NavBar(props) {

    if (props.direction === "left") {
        return (
            <div className="nav-bar">
                <img src={navIcon} />
            </div>
        )
    }

    if (props.direction === "right") {
        return (
            <div className="nav-bar right">
                <img src={navIcon} />
            </div>
        );
    }

}

function Thumbnail() {
    const [count, setCount] = useState(0);

    let imageItem = DATA.map(item => (
        <Link
            key={item.id}
            to={{
                pathname: `/img/:${item.id}`
            }}
        >
            <img src={item.path} onClick={() => setCount(prevCount => prevCount + 1)} />
        </Link>
        // console.log(count),

    ));

    return (
        <div className="thumbnail">
            {imageItem}
        </div>
    )
}

function ImageGallery() {
    // let location = useLocation(); 

    return (
        <div id="image-gallery">
            <Content />
            {/* <Thumbnail /> */}
            <Router>
                <Switch>
                    <Thumbnail />
                </Switch>
            </Router>
        </div>
    );
}

function GalleryApp() {
    return (
        <Router>
            <ImageGallery />
        </Router>
    )
}


export default GalleryApp;