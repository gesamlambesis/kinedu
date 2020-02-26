import React from 'react'
import Checked from '../../icons/checked'
import {
    CompletedWrapper
} from './style'

const MilestonesCompleted = () => {
    return <CompletedWrapper>
        <Checked />
        <h1>
            Congratulations!
            </h1>
        <h2>
            Your baby has been complete all the milestones! :)
        </h2>
    </CompletedWrapper>
}

export default MilestonesCompleted