import styled from 'styled-components/macro'

export const StyledButton = styled.button`
border-radius: 30px 30px 30px 30px;
height: 60px;
width: ${props => props.width}px;
background: ${props => props.background ? props.background: "#EEEEEE"};
color: ${props => props.textColor ? props.textColor: "grey"};
font-size : 18px;
cursor: pointer;
font-weight: bolder;
outline: none;

@media only screen and (max-width: 430px) {
    width: 100%;
}`