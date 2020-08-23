import React, { FC } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'
import { Container } from '@material-ui/core'
import StartPage from '../containers/StartPage'
import Header from '../containers/Header'

const Main: FC = () => (
    <Container>
        <Router>
            <Switch>
                <Route path="/">
                    <StartPage />
                </Route>
            </Switch>
        </Router>
    </Container>
)

const Routes: FC = () => (
    <>
        <Header />
        <Main />
    </>
)

export default Routes
