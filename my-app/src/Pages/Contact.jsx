import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import {Desktop,Horizontal} from "../responsive"
import Title from '../Components/Title'

 const Contain  = styled.div`

 width: 100%;
 height: 100vh;
 ${Horizontal({height:"200vh"})};
 background-color: #232323;
 display: flex;

 min-height:600px;



 form{
     padding-top: 30vh;
     width: 100%;
     
     height: 80%;
     position: relative;

     display: flex;
     flex-direction: column;
     justify-content: space-evenly;
    
    border-radius: 10px;
    padding: 20px;
    top: 13vh;
   
     ${Desktop({width:"50%",left:"25%"})}
     
    

    

     input{
         width: 100%;
         height: 30px;
         padding: 10px;
         background: none;
         border: none;
         border-bottom: solid 1px #c4c4c460;

        ::placeholder{
            color: #e6e4e45f;
            opacity: 100%;
            font-weight: bold;
            font-size: 13px;
          

          

        }
    
     }
     
     textarea{
         height: 90px;
         padding: 10px;
         background: none;
         border: none;
         border-bottom: solid 1px #c4c4c460;

         ::placeholder{
            color: #e6e4e45f;
            opacity: 100%;
            font-weight: bold;
            top: 80%;
            position: relative;
            font-size: 13px;
          

        }
     }


     button{
         
         font-size: 20px;
         background: #E27357;
        padding: 10px;
        color: white;
         width: 200px;
         border: none;
         box-shadow: 2px 3px 4px #0707074c;
     }

     
 }
 
 `

 const Details = styled.div`
 width: 100%;
 height: 10vh;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 `


const Right = styled.div`

    ${Desktop({width:"50",height:"100%",background:"red"})}

`



function MyForm() {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/f/xgedvqzo",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  return (
    <Contain>

      <form onSubmit={handleOnSubmit} enctype="multipart/form-data">
          <Title title="CONTACT ME "/>

        <Details>
        <input id="name" type="text" name="name" placeholder="Name" required />
        <input id="email" type="email" name="email" placeholder="Email" required />
        
        
  
        
        </Details>
     
        
        <textarea id="message" name="message" placeholder="Message"></textarea>
        <button type="submit" disabled={serverState.submitting}>
          submit
        </button>
        {serverState.status && (
          <p className={!serverState.status.ok ? "errorMsg" : ""}>
            {serverState.status.msg}
          </p>
        )}
      </form>
      <Right>

      </Right>

    
    </Contain>
  );
};

export default MyForm;