import React, { useState, useEffect } from 'react'  
import '../style3.css';

import axios from 'axios';  

import { Button,CardFooter, Col, Container, Form, Input, InputGroup, Row } from 'reactstrap';  


function CustomerRequest(props) {  

  const [transaction, settransaction] = useState({ Username: '', Address: '',MobileNo: '', DateAndTime:'',Status: ''});  



  const apiUrl = "https://localhost:44387/Api/Customer/RequestChangeAM";  
 

  const Insertemployee = (e) => {  
    if(transaction.Address !='' || transaction.MobileNo!=''){
    
    

    e.preventDefault();  

    const data = {  Username:localStorage.getItem("token"),Address:transaction.Address,MobileNo:transaction.MobileNo, DateAndTime:'',Status:'Pending'};  

    axios.post(apiUrl, data)  

      .then(result => {  
        if(result.data.Status=="Success"){
          alert("Successul");
        
        }
       
else{
  alert("Already applied for change in address/phone");

}
      
      });  
   
    }
    else{
      alert("Both fields cannot be empty");
    }
  };  

  const onChange = (e) => {  

    e.persist();  


    settransaction({...transaction, [e.target.name]: e.target.value});  

  }  

 const onChangeValue=(event)=> {
  settransaction({...transaction, [transaction.Type.name]: event.target.value});  
  }


   
  return (  
<div className="Display">
  <br></br>
  <div className="card1">
  <h3>Request for change in address or mobile number..</h3>

    <div className="app flex-row align-items-center">  

      <Container>  

        <Row className="justify-content-center">  

          <Col md="12" lg="10" xl="8">  

          <br></br>

                <Form onSubmit={Insertemployee}>  

                <InputGroup className="mb-3">  

<label>Phone No:&nbsp;&nbsp; </label>

<Input  className="col-sm-6" title="10 digit number starting with 6,7,8,9" pattern="[6,7,8,9]{1}[0-9]{9}"  type="text" name="MobileNo" id="MobileNo"  value={transaction.MobileNo} onChange={ onChange }  /> 
</InputGroup>  



      <InputGroup className="mb-3">  
 
<label>Address:&nbsp;&nbsp;&nbsp;&nbsp; </label>
<Input  className="col-sm-6"  name="Address" id="Address"  value={transaction.Address} onChange={ onChange }  />  

</InputGroup>  
                





















<CardFooter className="p-4">  

<Row>  

  <Col xs="12" sm="6">  

    <Button type="submit" className="btn btn-info mb-1" block ><span>Submit</span></Button>  

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

export default CustomerRequest