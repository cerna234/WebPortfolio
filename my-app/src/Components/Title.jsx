import React from 'react'
import styled from 'styled-components'
import {Desktop,Desktop2} from '../responsive'


const Container = styled.div`

    width: 100%;
    height: 20vh;
 
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2{
        
        display: flex;
        justify-content: center;
        width: 100%;
        color: #7e7d7d20;
        font-size: 40px;
        padding-top: 10%;
        ${Desktop({fontSize:"60px"})}
    }

    h3{
      
        display: flex;
        justify-content: center;
        width: 100%;
        position: relative;
        bottom: 26%;
        color: #E27357;
        font-size: 20px;
        ${Desktop({fontSize:"30px",bottom:"37%"})}
        ${Desktop2({bottom:"35%"})}
    

    }
   

`

const InnerContainer = styled.div`
    width: 100%;
    height: 100%;
 
`


const Title = (props) => {
    return (
        <Container>
       
            <InnerContainer>

            <h2>{props.title}</h2>
            <h3>{props.title}</h3>
            </InnerContainer>
        </Container>
    )
}

export default Title
