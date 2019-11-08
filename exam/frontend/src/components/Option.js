import React, { useState, useEffect } from 'react';
import OptionReminder from './OptionReminder'

const Option = (props) => {
    const [vote, setVote] = useState(props.votes);
    const [check, setCheck] = useState(false);

    // const handleVote = () => setVote(vote + 1);
    const handleSelected = () => props.handleSelected(props.id);

    // console.log(props.id);
    // console.log(props.selectedId);

    return (
        <div className="option">
            <input
                type="radio"
                id={props.id}
                name={props.name}
                // onChange={handleVote}
                onClick={handleSelected}
                checked={props.id === props.selectedId ? true : false}
            />
            <label for={props.id}>{props.name}</label>
            {vote}
            <OptionReminder
                selectedId={props.selectedId}
                name={props.name}
            />
        </div>
    )
}

export default Option;