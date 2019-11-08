import React from 'react';
import Question from './Question';
import OptionArea from './OptionArea';

import '../doodle-app.css'

const Doodle = () => {
    return (
        <div id="doodle-app">
            <Question />
            <OptionArea />
        </div>
    )
}

export default Doodle;