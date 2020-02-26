import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Milestones from '../Milestones'
import MilestonesCompleted from '../MilestonesCompleted'

const RootRoutes = () => (
    <Switch>
        <Route
            exact
            path="/"
            component={Milestones}
        />
        <Route 
            path="/milestonesCompleted"
            component={MilestonesCompleted}
        />
    </Switch>
)

export default RootRoutes