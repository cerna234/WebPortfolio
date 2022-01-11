import React from 'react'
import styled from 'styled-components'
import {Desktop,Desktop2,Horizontal} from '../responsive'
import MainColor from '../variables'


const Container = styled.div`
    width: 100%;
    height: 20vh;
    ${Horizontal({height:"60vh"})};
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2{
        
        display: flex;
        justify-content: center;
        width: 100%;
        color: #7e7d7d11;
        font-size: 40px;
        padding-top: 10%;
        ${Desktop({fontSize:"70px"})}
    }
    h3{
      
        display: flex;
        justify-content: center;
        width: 100%;
        position: relative;
        bottom: 26%;
        color: ${MainColor};
        
        font-size: 20px;
        ${Desktop({fontSize:"40px",bottom:"37%"})}
        ${Desktop2({bottom:"39%"})}
    
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