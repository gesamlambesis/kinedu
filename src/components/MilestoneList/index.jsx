import React, { useCallback } from 'react'
import Button from '../Button'
import useAnswerMilestone from '../../hooks/milestones/useAnswerMilestone'
import {
    AreasContainer,
    MilestoneWrapper,
    ButtonWrapper,
    ItemWrapper
} from './style'

const backgroundColors = {
    "Not answered": "#EEEEEE",
    "Completed": "#75B753"
}

const fontColor = {
    "Uncompleted": "#75B753",
    "Completed": "white",
}

const MilestoneList = ({
    milestones,
    milestoneSelected
}) => {

    const answerMilestone = useAnswerMilestone()

    const updateMilestoneCallback = useCallback((milestoneSelected, id, answer) => {
        let newAnswer = answer === null || answer === "Uncompleted" ?
            "Completed" : "Uncompleted"

        answerMilestone(milestoneSelected, id, newAnswer)
    }, [answerMilestone])

    return <div>
        {milestones.map((milestone, id) =>
            (<ItemWrapper key={milestone.id}>
                <AreasContainer>
                    <MilestoneWrapper>
                        <h4>{milestone.title}</h4>
                        <h5>{milestone.description}</h5>
                    </MilestoneWrapper>

                    <ButtonWrapper>
                        <Button
                            text={milestone.answer === null ? "Not answered" : milestone.answer}
                            width={"200"}
                            background={backgroundColors[milestone.answer]}
                            textColor={fontColor[milestone.answer]}
                            onClick={() => {
                                updateMilestoneCallback(milestoneSelected, id, milestone.answer)
                            }}
                        />
                    </ButtonWrapper>
                </AreasContainer>
            </ItemWrapper>)
        )}
    </div>
}

export default MilestoneList