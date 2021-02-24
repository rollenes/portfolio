import React from 'react'

import {Switch, Route} from 'react-router-dom'

import AboutMe from './AboutMe/AboutMe'
import Contact from './Contact/Contact'
import DashBoard from './DashBoard/DashBoard'

const MainContent = () => {
    return (
        <Switch>
            <Route path="/aboutMe">
                <AboutMe />
            </Route>

            <Route path="/contact">
                <Contact />
            </Route>

            <Route path="/">
                <DashBoard />
            </Route>
        </Switch>
    )
}

export default MainContent
