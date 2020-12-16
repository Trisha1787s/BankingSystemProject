import React, { useState, useEffect } from 'react'  
import '../style3.css';
//import * as ReactDOM from 'react-dom';
import axios from 'axios';  

import { Button,  CardFooter, Col, Container, Form, Input, InputGroup, Row } from 'reactstrap';  


export default function Customerpasswordchange(props) {  


  const [pass, setpass] = useState({ OldPassword: '',Password1: '', Password2: ''});  

  const [showLoading, setShowLoading] = useState(false);  

  const apiUrl = "https://localhost:44387/Api/Customer/changepassword"; 

  const resetForm = () => { 
    setpass({OldPassword: '',Password1: '', Password2: '' })
       
        }
  const Insertemployee = (e) => {  
    if(pass.OldPassword!=pass.Password1 && pass.Password1==pass.Password2 )
{
    e.preventDefault();  

    const data = { Username:localStorage.getItem("token"),OldPassword:pass.OldPassword,NewPassword:pass.Password1 };  

    axios.post(apiUrl, data)  

      .then((result) => {  
alert("Password Updated successfully,Please LogOut");
        props.history.push('/CustomerHome')  

      });  
    }
    else{
      alert("All fields are mandatory");
    }
  };  

  const onChange = (e) => {  

    e.persist();  


    setpass({...pass, [e.target.name]: e.target.value});  

  }  



   
  return (  
<div className="Display"> 
<br></br>
<div className="card1"> 
  <h3>Please fill in the details...</h3>

    <div className="app flex-row align-items-center">  

      <Container>  

        <Row className="justify-content-center">  

          <Col md="12" lg="10" xl="8">  

          

                <Form onSubmit={Insertemployee}>  


<InputGroup className="mb-3">  

<label className="mr-5">Old Password:</label>

<Input type="password"   className="col-sm-6" name="OldPassword" id="OldPassword" value={pass.OldPassword} onChange={ onChange }  />   

</InputGroup>  


<InputGroup className="mb-3">  

<label className="mr-5">New Password:</label>

<Input type="password" pattern="[0-9a-zA-Z]{5,10}" title="5 to 10 with numbers and characters"   className="col-sm-6" name="Password1" id="Password1"  value={pass.Password1} onChange={ onChange }  />   

</InputGroup>  


<InputGroup className="mb-3">  

<label className="mr-3">Confirm Password:</label>

<Input type="password"   className="col-sm-6"  name="Password2" id="Password2" value={pass.Password2} onChange={ onChange }  />   

</InputGroup>  
                



















<CardFooter className="p-4">  

<Row>  

  <Col xs="12" sm="4">  

    <Button type="submit" className="btn btn-info mb-1" block ><span>Submit</span></Button>  

  </Col>  

  <Col xs="12" sm="4">  

    <Button  onClick={resetForm} className="btn btn-danger mb-1" block><span>Reset</span></Button>  

  </Col>  

</Row>  

</CardFooter>  

</Form>  


</Col>  

</Row>  

</Container>  


</div> 
</div>
</div>
)  

}  

