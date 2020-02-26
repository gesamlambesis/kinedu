import styled from 'styled-components/macro'

export const LeftOption = styled.div`
    border: 1px solid white;
    width: 200px;
    border-radius: 20px 0 0 20px;
    display: inline-block;
    background: ${props => props.background};
    color:  ${props => props.color};
    height: 50px;
    cursor: pointer;
    @media only screen and (max-width: 430px) {
        width: 150px;
    }
`

export const RightOption = styled.div`
    border: 1px solid white;
    width: 200px;
    margin-left: 30px;
    border-radius: 0 20px 20px 0;
    margin-left: 0px;
    display: inline-block;
    color: ${props => props.color};
    background: ${props => props.background};
    height: 50px;
    cursor: pointer;
    @media only screen and (max-width: 430px) {
        width: 150px;
    }
`

export const Wrapper = styled.div`
    margin: 0 auto;
    margin-top: 10px
`

export const H5 = styled.h5`
    margin: 0;
    padding-top: 18px;
    
`

