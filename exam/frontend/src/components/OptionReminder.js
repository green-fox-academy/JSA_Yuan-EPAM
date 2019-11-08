import React, { useState } from 'react'

const OptionReminder = () => {
    let  [reminder, setReminder] = useState({
        // reminder : ["No option selected"]
    });

    console.log('OptionRemindersd');
    console.log(reminder);

    return (
        <div className="reminder">
            {/* <p>{reminder}</p> */}
        </div>
    )
}

export default OptionReminder