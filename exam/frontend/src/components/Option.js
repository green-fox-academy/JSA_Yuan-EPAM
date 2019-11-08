import React from 'react';

const Option = (props) => {
    const handleSelected = () => props.handleSelected(props.id);

    console.log(`${props.name}: vote ${props.votes}`);
    // console.log(props.votes);

    return (
        <div className="option">
            <input
                type="radio"
                id={props.id}
                name={props.name}
                // onClick={handleSelected}
                onChange={handleSelected}
                checked={props.id === props.selectedId}
            />
            <label for={props.id}>{props.name}</label>

            {props.selectedId === props.id ? props.handleReminder(props.name) : ''}
        </div>
    )
}

export default Option;