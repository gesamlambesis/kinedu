import React, { useState, useEffect } from 'react'
import {
    LeftOption,
    RightOption,
    Wrapper,
    H5
} from './style'

const MilestonesSwitch = ({
    selected,
    onCallback,
    options
}) => {

    const [styles, setStyles] = useState({})

    useEffect(() => {
        if (selected === 0) {
            setStyles({
                leftOption: {
                    background: "white",
                    color: "#1FADDF"
                },
                rightOption: {
                    background: "transparent",
                    color: "white"
                }
            })
        } else {
            setStyles({
                leftOption: {
                    background: "transparent",
                    color: "white"
                },
                rightOption: {
                    background: "white",
                    color: "#D43571"
                },
            })
        }

    }, [selected])

    return (
        <Wrapper>
            <LeftOption
                style={{ ...styles.leftOption }}
                onClick={onCallback}
            >
                <H5>{options.leftOption}</H5>
            </LeftOption>
            <RightOption
                style={{ ...styles.rightOption }}
                onClick={onCallback}
            >
                <H5>{options.rightOption}</H5>
            </RightOption>
        </Wrapper>
    )
}

export default MilestonesSwitch