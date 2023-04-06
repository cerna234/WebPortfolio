import React from 'react'
import styled from 'styled-components'
import {Desktop,Desktop2,Horizontal} from '../responsive'
import MainColor from '../variables'


const Container = styled.div`
    width: 100%;
    height: 10vh;
    min-height:100px;
    ${Desktop({minHeight:"200px"})}
    
   
    h3{
      
        display: flex;
        justify-content: center;
        color: ${MainColor};
        text-shadow:5px 5px 10px #191919;
        font-size: 20px;
        ${Desktop({fontSize:"30px",bottom:"30%"})}
    
        ${Desktop2({bottom:"30%"})}
    
    }
   
`




const Title = (props) => {
    return (
        <Container>
       
            
            <h3>{props.title}</h3>
        
        </Container>
    )
}

export default Title