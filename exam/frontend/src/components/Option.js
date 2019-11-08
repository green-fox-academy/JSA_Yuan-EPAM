import React, { useState, useEffect } from 'react';
import OptionReminder from './OptionReminder'

const Option = (props) => {
    // const [vote, setVote] = useState(2);
    // const handleVote = () => setVote(props.id === props.selectedId ? 0 : 1);
    const handleSelected = () => props.handleSelected(props.id);

    // useEffect(() => {
    //     if (props.id === props.selectedId) {
    //         props.handleReminder(props.name);
    //     }
    // }, [])

    // console.log('props id: ' + props.id)
    // console.log('props selectedId: ' + props.selectedId)
    return (
        <div className="option">
            <input
                type="radio"
                id={props.id}
                name={props.name}
                // onChange={handleReminder(props.name)}
                onClick={handleSelected}
                checked={props.id === props.selectedId}
            />
            <label for={props.id}>{props.name}</label>

            {props.selectedId != -1 ? props.handleReminder(props.name) : ''}
        </div>
    )
}

export default Option;