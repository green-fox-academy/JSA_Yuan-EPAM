import React, { useState, useEffect } from 'react';

import "./GalleryApp.css"
import navIcon from "./nav-icon.svg";
import DATA from "./Data";

function Content() {
    let [count, setCount] = useState(0);
    let [opacity, setOpacity] = useState(1);
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
             setOpacity(0.5);
        } else {
            setOpacity(1);
        }
    })

    return (
        <div className="content">
            <button onClick={prevItem}><NavBar direction="left" /></button>
            {imageItem}
            <button onClick={nextItem}><NavBar direction="right" opacity={opacity}/></button>
        </div>
    )
}

function Image(props) {
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
            {/* Imgage description area */}
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
            <div className="nav-bar right" style={{opacity: props.opacity}}>
                <img src={navIcon} />
            </div>
        );
    }
}

function ThumbnailImg(props) {
    let [imgIdx, setImgIdx] = useState(0);
    let showIdx = (event) => {
        let clickedIdx = parseInt(event.target.className) - 1;
        setImgIdx(clickedIdx);
    };

    useEffect(() => {
        let img = document.querySelector(".images img")
        img.setAttribute("src", DATA[imgIdx].path);
    }, [imgIdx])

    return <img className={props.img.id} key={props.img.id} src={props.img.path} onClick={showIdx} />
}

function Thumbnail() {
    let imageItem = DATA.map(item => (
        <ThumbnailImg img={item} />
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
        <ImageGallery />
    )
}


export default GalleryApp;