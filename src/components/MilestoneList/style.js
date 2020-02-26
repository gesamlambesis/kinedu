import styled from 'styled-components/macro'

export const AreasContainer = styled.div`
    display: flex;
    padding-top: 10px;
    padding-bottom: 10px;
    @media only screen and (max-width: 600px) {
        display: block;
    }
`

export const MilestoneWrapper = styled.div`
    width: 70%;
    margin-left: 90px;
    color: grey;
    @media only screen and (max-width: 600px) {
        text-align: center;
        margin-left: 0px;
        width: 100%;
    }
`

export const ButtonWrapper = styled.div`
    margin-top: 20px;
    margin-left: 30px;
    @media only screen and (max-width: 600px) {
        text-align: center;
        margin-left: 0px;
    }
`

export const ItemWrapper = styled.div`
border-bottom: 2px solid #EEEEEE
`