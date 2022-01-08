import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

 const Contain  = styled.div`

 width: 100%;
 height: 100vh;
background: #3f3f3f;



 form{
     padding-top: 30vh;
     width: 80%;
     
     height: 80%;
     position: relative;
     left: 10%;
     display: flex;
     flex-direction: column;
     justify-content: space-evenly;

     h2{
         color: #ffffff;
     }


     input{
         width: 45%;
         height: 30px;
         padding: 10px;
         background: #d3d3d388;
         border: none;
         box-shadow: 2px 3px 4px black;

        ::placeholder{
            color: #f7f4f4;
            opacity: 100%;
            text-shadow: 1px 1px 3px black;
          

        }
    
     }
     
     textarea{
         height: 90px;
         padding: 10px;
         background: #d3d3d388;
         border: none;
         box-shadow: 2px 3px 4px black;

         ::placeholder{
            color: #f7f4f4;
            opacity: 100%;
            text-shadow: 1px 1px 3px black;
          

        }
     }


     button{
         
         font-size: 20px;
         background: #E27357;
        padding: 10px;
        color: white;
         width: 200px;
         border: none;
         box-shadow: 3px 3px 4px black;
     }
 }
 
 `

 const Details = styled.div`
 width: 100%;
 display: flex;
 justify-content: space-between;
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

      <form onSubmit={handleOnSubmit}>
          <h2>GET IN TOUCH</h2>

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
    </Contain>
  );
};

export default MyForm;