import React from 'react'
import {
    StyledButton
} from './style'

const Button = ({
    text,
    width,
    onClick,
    background,
    textColor
}) => {
    return <StyledButton
        background={background}
        textColor={textColor}
        width={width}
        onClick={onClick}>
        {text}
    </StyledButton>
}

export default Button