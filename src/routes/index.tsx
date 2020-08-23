import React, { FC } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'
import StartPage from '../containers/StartPage'

const Routes: FC = () => (
    <Router>
        <Switch>
            <Route path="/">
                <StartPage />
            </Route>
        </Switch>
    </Router>
)

export default Routes
