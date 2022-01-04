import React from 'react'
import {Project, Projects} from '../Data'
import styled from 'styled-components'
import Projects from '../Components/Projects'


const Container = styled.div`
    width: 100%;
    height: 100%;

`
const AllProjects = () => {
    return (
        <Container>
            <Projects/>
        </Container>
        )

    
}

export default AllProjects
