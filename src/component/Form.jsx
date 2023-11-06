import React from 'react'
import Col from 'react-bootstrap/Col';
import { useState,useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import './Form.css'

function Form() {
  const [showPopup, setShowPopup] = useState(false);

  
  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 1000);
        return () => clearTimeout(timer);
    }
  }, [showPopup]);
  const handleButtonClick = () => {
    setShowPopup(true);
  };

  // useEffect(()=>{
  //   if(showPop){
  //     const time = setTimeout(( )=>{
  //       setShowPop(true);
  //     },9000 );
  //     return () => clearTimeout(time)
  //     }
  //   },[showPop]);
  //   const handleClick = ( ) =>{
  //     setShowPop(false);
  //   }
  

  return (
    <div className='main'>
      <div className='first'>
      <Col  className="col" xs={80} md={50}>
          <Image src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200" roundedCircle />
        </Col>
        <h3>Kiran Acharya</h3>
        <br />
        <table style={{border:"px solid "}}>
            <tr>
            <td className='alfred'><svg xmlns="http://www.w3.org/2000/svg" width="36" height="26" fill="white" class="bi bi-house-door" viewBox="0 0 16 16">
  <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z"/>
</svg>Account</td></tr>
            <tr><td className='r'><svg xmlns="http://www.w3.org/2000/svg" width="26" height="36" fill="currentColor" class="bi bi-key" viewBox="0 0 16 16">
  <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"/>
  <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg > Password</td></tr>
            <tr><td className='r'><svg xmlns="http://www.w3.org/2000/svg" width="26" height="36" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
</svg> Security</td></tr> 
            <tr><td className='r'><svg xmlns="http://www.w3.org/2000/svg" width="26" height="36" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
  <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
</svg> Application</td></tr>
            <tr><td><svg xmlns="http://www.w3.org/2000/svg" width="26" height="36" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
</svg> Notification</td></tr>
         
<tr><td>   </td></tr>
        </table>
        </div>
    
        <div className='second'>
          <h4 className='Acc'>Account Settings</h4> <br />
          <form>
          <table>
    <tr>
        <td>
       <h5> First Name</h5>
        <input type="text"/>   
        </td>
        <td>
       <h5> Last Name</h5>
        <input type="text"/>   
        </td>
    </tr>
    <tr>
        <td>
          <h5>  Email</h5>
            <input type="email"/>   
            </td>
           
        <td>
          <h5>  Phone number</h5>
            <input type="number"/>   
            </td>
            </tr>
            <tr>
        <td>
          <h5>  Company</h5>
            <input type="text"/>   
            </td>
           
        <td>
          <h5>  Designation</h5>
            <input type="text"/>   
            </td>
            </tr>
            <tr>
        <td colspan="2">
        <h5> Bio</h5>
        <textarea rows="5" cols="75"></textarea>
    </td>
    </tr>
    <tr className='button' >
    <button className='b' onClick={handleButtonClick}>Update</button>
    <button className='u'>Cancel</button>
    {showPopup && <div className="popup">Successfully Submitted</div>}
  

    </tr>
         </table>
         </form>

        </div>
    </div>
  )
}

export default Form;