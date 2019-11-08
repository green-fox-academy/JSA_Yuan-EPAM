import React, { useEffect } from 'react'

const VoteResult = (props) => {


    useEffect(() => {
        console.log("votesume:" + props.voteSum + "..." + props.voteScore);
        props.handleVoteSum(props.vote);
    }, [])

    return (
        <div id="vote-score">

        useEffect(() => {
            console.log("votesume:" + props.voteSum + "..." + props.voteScore);
            props.handleVoteSum(props.voteScore);
        }, [])
    

        useEffect(() => {
            console.log("votesume:" + props.voteSum + "..." + props.voteScore);
            props.handleVoteSum(props.voteScore);
        }, [])
    
            {props.name}: {props.voteScore} vote{props.voteScore > 1 ? 's' : ''}
            <div className="score-bar" style={{width: (props.voteScore / props.voteSum)}}></div>
        </div>
    )
}

export default VoteResult;