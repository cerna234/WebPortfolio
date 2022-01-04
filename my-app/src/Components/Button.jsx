import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width: 100%;
height: 20vh;
text-align: center;


`

const InnerContainer = styled.div`
width:100%;

p{

    display: inline-block;
    padding: 20px;
    color: white;
}

p:hover{
    border-bottom: 2px solid #E27357;
    color: #E27357;
    transition: ease-in-out 0.2s;
    cursor: pointer;
}

`

const Button = () => {
    return (
        <Container>
           <InnerContainer>
               <p>HELLLO</p>
           </InnerContainer>
        </Container>
    )
}

export default Button
