import React, { useState, useEffect } from 'react';
import Option from './Option';

import OptionReminder from './OptionReminder';

const OptionArea = (props) => {
    const [options, setOptions] = useState({});
    // const [hasError, setErrors] = useState(false);
    const [selectedId, setSelectedId] = useState(-1);

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

    const handleSelected = (id) => {
        // console.log(id)
        return setSelectedId(id)
    };

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
                    />
                ))}
                <button type="submit" >Vote</button>
                <OptionReminder
                    selectedId={selectedId}
                    name={selectedId === -1 ? options[selectedId]["name"] : ''}
                />
            </form>
        </div>
    )
}

export default OptionArea;