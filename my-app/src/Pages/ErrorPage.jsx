import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import MainColor from '../variables';
import { Desktop } from '../responsive';


const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color:rgb(12, 12, 12);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h2{
        font-size: 20px;
        ${Desktop({fontSize:"40px"})}
        color:  ${MainColor};
    }

    a{
        color: #bebebe;
        text-decoration: none;
        padding-top: 20px;
    }
    a:hover{
        color: #5a5959;

    }
    
`;




const ErrorPage = () => {
    return (
    <Container>

        <h2>
            ERROR PAGE NOT FOUND!!
        </h2>
        <Link className='Link' to="/WebPortfoliov2"> RETURN TO HOME</Link>
        

    </Container>
    )
}

export default ErrorPage
