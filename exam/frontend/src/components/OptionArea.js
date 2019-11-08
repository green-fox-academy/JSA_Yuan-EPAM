import React, { useState, useEffect } from 'react';
import Option from './Option';

import OptionReminder from './OptionReminder';

const OptionArea = (props) => {
    const [options, setOptions] = useState({});
    // const [hasError, setErrors] = useState(false);
    const [selectedId, setSelectedId] = useState(-1);
    const [reminder, setReminder] = useState("No option selected");

    async function fetchData() {
        let url = "http://localhost:8080/api/poll";
        const res = await fetch(url);
        res.json()
            .then(res => setOptions(res))
        // .catch(err => setErrors(err));
    }

    useEffect(() => {
        fetchData();
    }, [])

    const handleSelected = (id) => setSelectedId(id);
    const handleReminder = (name) => setReminder(`Selected option: ${name}`);

    return (
        <div className="option-area">
            <form>
                {Object.keys(options).map(key => (
                    <Option
                        key={options[key]["id"]}
                        id={options[key]["id"]}
                        name={options[key]["name"]}
                        votes={options[key]["votes"]}
                        onClick={handleSelected}
                        selectedId={selectedId}
                        handleSelected={handleSelected}
                        handleReminder={handleReminder}
                    />
                ))}
                
                {selectedId != -1 ? (<button selectedId={selectedId} type="submit" >Vote</button>) : ''}


                <OptionReminder reminder={reminder} />

            </form>
        </div>
    )
}

export default OptionArea;