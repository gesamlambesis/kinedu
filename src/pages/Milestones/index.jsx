import React, { useState, useEffect, useMemo } from 'react'
import useGetMilestones from '../../hooks/milestones/useGetMilestones'
import {
    MilestonesWrapper,
    AreasContainer,
    Separator,
    ButtonWrapper,
    TextWrapper
} from './style'
import {
    H2,
    H5
} from '../../components/Title'
import MilestonesSwitch from '../../components/MilestonesSwitch'
import MilestoneList from '../../components/MilestoneList'
import Button from '../../components/Button'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

const colors = {
    0: "#1FADDF",
    1: "#D43571",
}

const Milestones = (props) => {

    const [currentMilestone, setCurrentMilestone] = useState({})
    const [optionSelected, setOptionSelected] = useState(0)
    const milestones = useGetMilestones()

    useEffect(() => {

        if (milestones.milestones[optionSelected]) {
            setCurrentMilestone(milestones.milestones[optionSelected])
        }

    }, [setCurrentMilestone, milestones, optionSelected])

    const isCompleted = useMemo(() => {
        let completed = true
        Object.keys(milestones.milestones).forEach((element) => {
            let skill = milestones.milestones[element].skill
            Object.keys(skill.milestones).forEach((index) => {
                if (skill.milestones[index].answer === null ||
                    skill.milestones[index].answer === "Uncompleted") {
                    completed = false
                }
            })
        })

        return completed
    }, [milestones.milestones])

    if (!milestones.milestones[optionSelected]) {
        return <div style={{ textAlign: "center" }}>
            <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
            />
        </div>
    }

    return <MilestonesWrapper>
        <AreasContainer colorArea={colors[optionSelected]}>
            <H2>Areas</H2>
            <MilestonesSwitch
                selected={optionSelected}
                onCallback={() => {
                    setOptionSelected(optionSelected === 0 ? 1 : 0)
                }}
                options={{
                    leftOption: "Physical",
                    rightOption: "Social & emotional"
                }}
            />
            <Separator />
            <H2>
                {currentMilestone.skill ? "Skill: " + currentMilestone.skill.title : ""}
            </H2>
            <TextWrapper>
                <H5>
                    {currentMilestone.skill ? currentMilestone.skill.description : ""}
                </H5>
            </TextWrapper>

        </AreasContainer>
        <MilestoneList
            milestones={currentMilestone.skill ? currentMilestone.skill.milestones : []}
            milestoneSelected={optionSelected}
        />
        <ButtonWrapper>
            <Button
                text={optionSelected === 0 ? "Next" : "Finish assessment"}
                width={"400"}
                textColor={optionSelected === 1 && !isCompleted ? "grey" : "white"}
                background={optionSelected === 1 && !isCompleted ? "#EEEEEE" : "#75B753"}
                onClick={() => {

                    if (optionSelected === 1 && isCompleted) {
                        props.history.push('/milestonesCompleted');
                    } else {
                        setOptionSelected(1)
                    }
                }}
            />
        </ButtonWrapper>

    </MilestonesWrapper>
}

export default Milestones