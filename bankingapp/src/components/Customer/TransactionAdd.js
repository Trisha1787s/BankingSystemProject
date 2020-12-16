import React, { useState, useEffect } from 'react'  
import '../style3.css';

import axios from 'axios';  

import { Button, CardFooter, Col, Container, Form, Input, InputGroup, Row } from 'reactstrap';  


function TransactionAdd(props) {  

  const [transaction, settransaction] = useState({ Username: '', Amount: '',PIN: '', Type: ''});  

  const [showLoading, setShowLoading] = useState(false);  

  const apiUrl = "https://localhost:44387/Api/Customer/addtransactions";  
  const resetForm = () => { 
    settransaction({ Amount: '',PIN: '', Type: ''})
       
        }

  const Insertemployee = (e) => {  
 if(transaction.Amount && transaction.Type && transaction.PIN){
    e.preventDefault();  

    const data = {  Username:localStorage.getItem("token"), Amount:transaction.Amount,PIN:transaction.PIN,Type:transaction.Type};  

    axios.post(apiUrl, data)  

      .then(response => {  
        if(response.data.Status=="Success"){
          alert("Transaction Success");
          props.history.push('/MiniTransaction')  
        }
       
else{
  alert("Transaction Failed");
  props.history.push('/MiniTransaction')  
}
      });  
    }
    else{
      alert("All finds are mandatory");
    }
  };  

  const onChange = (e) => {  

    e.persist();  


    settransaction({...transaction, [e.target.name]: e.target.value});  

  }  



   
  return (  
<div className="Display" >
  <br></br>
  <div className="card1">
  <h3>Please fill in the following details...</h3>

    <div className="app flex-row align-items-center">  

      <Container>  

        <Row className="justify-content-center">  

          <Col md="12" lg="10" xl="8">  

          <br></br>

                <Form onSubmit={Insertemployee}>  

                <InputGroup className="mb-3">  

<label>Enter Amount(in INR):&nbsp;&nbsp; </label>

<Input  className="col-sm-6" pattern="[0-9]{1,10}" type="text" name="Amount" id="Amount"  value={transaction.Amount} onChange={ onChange }  /> 
</InputGroup>  
<InputGroup className="mb-3">  

<div className="radio-buttons">
  <label>Type Of:</label>&nbsp;&nbsp;&nbsp; 
    
        <input
          name="Type" id="Debt" value="Debt" onChange={ onChange } 
          type="radio"
     
        />  Debt&nbsp;&nbsp;&nbsp; 


<input
          name="Type" id="Credit" value="Credit" onChange={ onChange } 
          type="radio"
     
        />  Credit&nbsp;&nbsp;&nbsp; 



  
      </div>
      </InputGroup>

      <InputGroup className="mb-3">  
 
<label>PIN(4 digit):&nbsp;&nbsp; </label>
<Input type="password" pattern="[0-9]{4}"  className="col-sm-6"  name="PIN" id="PIN"  value={transaction.PIN} onChange={ onChange }  />  

</InputGroup>  
                





















<CardFooter className="p-4">  

<Row>  

  <Col xs="12" sm="6">  

    <Button type="submit" className="btn btn-info mb-1" block ><span>Submit</span></Button>  

  </Col>  

  <Col xs="12" sm="6">  

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

export default TransactionAdd