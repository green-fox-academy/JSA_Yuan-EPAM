import React, { useState, useEffect } from 'react';
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

function Content() {
    let [count, setCount] = useState(0);
    let nextItem = () => {
        if (count >= 4) { return count; }
        setCount(count + 1);
    };
    let prevItem = () => {
        if (count <= 0) { return count; }
        setCount(count - 1);
    };

    let imageItem = <Image path={DATA[count].path} />;

    useEffect(() => {
        let navBarRight = document.querySelector(".right");
        if (count >= 4) {
            navBarRight.style.opacity = 0.5;
        } else {
            navBarRight.style.opacity = 1;
        }
    })

    return (
        <div className="content">
            <button onClick={prevItem}><NavBar direction="left" /></button>
            {imageItem}
            <button onClick={nextItem}><NavBar direction="right" /></button>
        </div>
    )
}

function Image(props) {
    console.log(props.path);
    let image = props.path;

    return (
        <div className="images">
            <img src={image} />
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

function ThumbnailImg(props) {
    let [imgIdx, setImgIdx] = useState(0);
    let img = <img key={props.img.id} src={props.img.path} />;
    let showIdx = (event) => {
        console.log("showIdx: ");
        console.log(imgIdx);
        let clickedIdx = parseInt(event.target.className) - 1;
        // console.log(event.target.className);
        console.log(clickedIdx);
        setImgIdx(clickedIdx);
    };

    useEffect(() => {
        // effect
        let img = document.querySelector(".images img")
        console.log("current img: ");
        console.log(img);
        img.setAttribute("src", DATA[imgIdx].path);
    }, [imgIdx])

    return <img className={props.img.id} key={props.img.id} src={props.img.path} onClick={showIdx} />

}

function Thumbnail() {

    let imageItem = DATA.map(item => (
        <ThumbnailImg img={item}/>
    ));

    return (
        <div className="thumbnail">
            {imageItem}
        </div>
    )
}

function ImageGallery() {
    return (
        <div id="image-gallery">
            <Content />
            <Thumbnail />
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