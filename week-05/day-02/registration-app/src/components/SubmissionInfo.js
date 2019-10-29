import React from 'react'

const SubmissionInfo =({ firstName, lastName, email}) => (
    <div>
        <h2>Submission Data:</h2>
        <ul>
            <li>{firstName}</li>
            <li>{lastName}</li>
            <li>{email}</li>
        </ul>
    </div>
)

export default SubmissionInfo