import React from 'react'

export default function listComponent(props) {
    return (
        <ul>
            {props.items.map(item => <li>{item}</li>)}
        </ul>
    );
}