import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Container = styled.div`
width: 100%;
height: 20vh;
text-align: center;


`

const InnerContainer = styled.div`
width:100%;

a{

    display: inline-block;
    padding: 20px;
    color: white;
    text-decoration: none;
    cursor: pointer;
}

a:hover{
    border-bottom: 2px solid #E27357;
    color: #E27357;
    transition: ease-in-out 0.2s;
    cursor: pointer;
}

`

const Button = (props) => {
    return (
        <Container>
           <InnerContainer>
               <Link to="/Projects">{props.title}</Link>
           </InnerContainer>
        </Container>
    )
}

export default Button
