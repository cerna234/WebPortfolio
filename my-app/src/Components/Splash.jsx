import styled from "styled-components";
import {Desktop} from '../responsive'





const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #232323;
    margin-top: 0;
    display: flex;
    justify-content: center;
`

const BackText = styled.div`
    width: 100%;
    height: 100vh;
    margin-top: 0;
    
    position: absolute;

    overflow-x: hidden;

    h2{
        font-size: 200px;
        transform: rotate(-0deg);
        position: absolute;
        top: 30vh;
        color: #5251511f;
    }


`

const MainInfo = styled.div`
    width: 80%;
    height: 50vh;

    top: 25%;
    padding-top: 30vh;
   

    p{
        color: #777676;
        font-size: 3rem;
        ${Desktop({ fontSize: "4rem"})}   
    }

    h1{
        color: #f0eeee;
        font-size: 3rem;
        ${Desktop({ fontSize: "6rem"})} 
       

    }

    h5{
        color: #E27357;
        ${Desktop({ fontSize: "2rem"})}  
        font-size: 12px;
        
        display: inline;
    }
    h5:hover{
        color: #962e15;
        transition: ease-in-out 0.1s;
        cursor: pointer;

        
  

    }

`


const Splash = () => {
    return (
        <Container>
           <BackText>
                <h2>DEVELOPER</h2>
           </BackText>

           <MainInfo>
               <p>i'm a</p>
               <h1>SOFTWARE</h1>
               <h1>DEVELOPER</h1>
               <h5>Contact Me</h5>
           </MainInfo>

          
           
            
        </Container>
    )
}

export default Splash
