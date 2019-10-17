import React from 'react'
import "./ImageGallery.css"
import navIcon from "./nav-icon.svg";


function Content() {
    const Thumbnail = {};

    return (
        <div className="content">
            <NavBar direction="left" />
            <Image />
            <NavBar direction="right" />
        </div>
    )
}

function Image() {
    return (
        <div className="images">
            <p>Images</p>
            <ImageContent />
        </div>
    )
}

function ImageContent(props) {
    return (
        <div className="img-content">
            Imgage content area
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
    const images = {};

    return (
        <div className="thumbnail">
            {/* Thumbnail: */}
            <p>thumbnail 1</p>
            <p>thumbnail 2</p>
        </div>
    )
}

function ImageGallery() {
    const data = {
        icon: { src: "./nav-bar.svg" }
    };


    return (
        <div id="image-gallery">
            {/* <h1>ImageGallery Area</h1> */}
            {/* <NavBar icon={data.icon} direction="left" /> */}
            <Content />
            {/* <NavBar icon={data.icon} direction="right" /> */}
            {/* <NavBar /> */}
            <Thumbnail />
        </div>
    );
}


export default ImageGallery;