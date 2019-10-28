import React from 'react'

const Increaser = (({onClick, number}) => (
    <div
        onClick={onClick}
    >
        <h1>The Increaser</h1>
        <div>{number}</div>
        <button>Increaser</button>
    </div>
))

export default Increaser