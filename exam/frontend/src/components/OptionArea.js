import React, { useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import Option from './Option';

import OptionReminder from './OptionReminder';

const OptionArea = (props) => {
    let history = useHistory();
    const [options, setOptions] = useState({});
    const [hasError, setErrors] = useState(false);
    const [selectedId, setSelectedId] = useState(-1);
    const [reminder, setReminder] = useState("No option selected");
    const [vote, setVote] = useState(0);

    async function fetchData() {
        let url = "http://localhost:8080/api/poll";
        const res = await fetch(url);
        res.json()
            .then(res => setOptions(res))
            .catch(err => setErrors(err));
    }

    async function handleSubmit(event) {
        history.push('./result');

        event.preventDefault();
        let url = `http://localhost:8080/api/vote/${selectedId}`;
        fetch(url, {
            method: 'POST',
            headers: {
                "Accept" : 'application/json',
                'Content-Type': 'application/json'
            },
            // id: selectedId
            body: JSON.stringify({
                id : selectedId,
                votes : vote
            })
        });
    }

    useEffect(() => {
        fetchData();
        handleVote();
    }, [])

    const handleSelected = (id) => setSelectedId(id);
    const handleReminder = (name) => setReminder(`Selected option: ${name}`);
    const handleVote = () => {
        console.log(`handler vote: ${vote}`);
        // history.push('/result');
        return setVote(1);
    }

    return (
        <div className="option-area">
            <form onSubmit={handleSubmit}>
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

                <div className="footer">
                    <OptionReminder reminder={reminder} />
                    {selectedId != -1 ? (<button type="submit" onClick={handleVote}>Vote</button>) : ''}
                </div>

            </form>
        </div>
    )
}

export default OptionArea;