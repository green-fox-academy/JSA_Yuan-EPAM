import React from 'react'

const Descreaser = (({onClick, number}) => (
    <div
        onClick={onClick}
    >
        <h1>The Descreaser</h1>
        <div>{number}</div>
        <button>Descrease</button>
    </div>
))

export default Descreaser