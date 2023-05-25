import styled from "styled-components";
import {Desktop} from '../responsive'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import MainColor from "../variables";
import { motion } from "framer-motion"




const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #232323;
    margin-top: 0;
    display: flex;
    justify-content: center;
    min-height:600px;
`

const BackText = styled.div`
    width: 100%;
    height: 100vh;
    min-height:600px;
    margin-top: 0;
    
    position: absolute;

    overflow-x: hidden;

    h2{
        font-size: 200px;
        position: absolute;
        top: 30vh;
        color: #5251511f;
        overflow-x:hidden;
    }


`

const MainInfo = styled.div`
    width: 80%;
    height: 50vh;
    z-index: 50;
    top: 25%;
    padding-top: 30vh;
   

    p{
        color: #777676;
        font-size: 3rem;
        ${Desktop({ fontSize: "3rem"})}   
    }

    h1{
        color: #f0eeee;
        font-size: 3rem;
        ${Desktop({ fontSize: "4rem"})} 
       

    }

    h5{
        

        a{
            color: ${MainColor};
        ${Desktop({ fontSize: "2rem"})}  
        font-size: 12px;
        
        display: inline;
        text-decoration: none;
        }
    }
    a:hover{
        color: #7e1b03;
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
                    <motion.div
                        initial={{x:-100}}
                        whileInView={{ x: 0 }}
                        transition={{duration: .6}}
                    >
                        <motion.p
                            initial={{y:-100}}
                            whileInView={{ y: 0 }}
                            transition={{duration: .8}}
                        >I'm a
                        </motion.p>
                        <h1>SOFTWARE</h1>
                        <h1>DEVELOPER</h1>

                    </motion.div>
                    
                    <motion.h5
                         initial={{x:100}}
                         whileInView={{ x: 0 }}
                         transition={{duration: .9}}
                    >
                    <Link to="/contact">CONTACT ME </Link>
                    </motion.h5>


               
           </MainInfo>


          
           
            
        </Container>
    )
}

export default Splash
