import React from 'react'

import styled from 'styled-components'
import Projects from '../Components/Projects'
import Title from '../Components/Title'



const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #232323;
    padding-top: 20vh;

   

`

const AllProjects = () => {
    return (
        <Container>
           <Title title="ALL PROJECTS"></Title>
            <Projects></Projects>
           
        </Container>
        )

    
}

export default AllProjects
