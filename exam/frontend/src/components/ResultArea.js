import React, { useState, useEffect } from 'react';
import VoteResult from './VoteResult';

const VoteArea = () => {
    const [hasError, setErrors] = useState(false);
    const [options, setOptions] = useState({});
    const [voteSum, setvoteSum] = useState(2);

    async function fetchData() {
        let url = "http://localhost:8080/api/poll";
        const res = await fetch(url);
        res.json()
            .then(res => setOptions(res))
            .catch(err => setErrors(err));
    }

    useEffect(() => {
        fetchData();
        handleVoteSum(voteSum);
    }, [])

    const handleVoteSum = () => {
        let sum = 0
        Object.keys(options).map(key => {
            console.log(sum);
            sum += options[key]["votes"]
        })
        console.log("handleVoteSum: " + sum);
        setvoteSum(sum);
        // return sum;
    }

    // const handleVoteSum = (voteScore) => setvoteSum(voteScore);

    return (
        <div className="result-areac">
            {Object.keys(options).map(key => {

                return (
                <VoteResult
                    key={options[key]["id"]}
                    name={options[key]["name"]}
                    voteScore={options[key]["votes"]}
                    voteSum={voteSum}
                    handleVoteSum={handleVoteSum}
                />)
                // options[key]["votes"]
            })}
        </div>
    )
}

export default VoteArea;