import React, { useState } from 'react'

const OptionReminder = (props) => {
    let  [reminder, setReminder] = useState("No option selected");

    const handleReminder = (content) => setReminder(content)

    console.log('OptionRemindersd');
    console.log(reminder);

    return (
        <div className="reminder">
                {/* {Object.keys(props.options).map(key => (
                    // props.options[key].id === props.selectedId ? setReminder(props.options[key].name) : ''
                ))} */}
            {/* <p>{reminder}</p> */}
            
            {props.reminder}
        </div>
    )
}

export default OptionReminder