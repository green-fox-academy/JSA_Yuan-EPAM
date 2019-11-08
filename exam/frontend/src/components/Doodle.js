import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Question from './Question';
import OptionArea from './OptionArea';
import VoteArea from './ResultArea';

import '../doodle-app.css'

const Doodle = () => {
    return (
        <Router>
            <div id="doodle-app">
                <Switch>
                    <Route exact path='/'>
                        <Question />
                        <OptionArea />
                    </Route>
                    <Route exac path='/result'>
                        <Question />
                        <VoteArea />
                    </Route>
                </Switch>

            </div>
        </Router>
    )
}

export default Doodle;