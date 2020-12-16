import React, { useState, useEffect } from 'react'  
import '../style3.css';

import axios from 'axios';  

import { Button,  CardFooter, Col, Container, Form, Input, InputGroup,DropdownItem,InputGroupAddon, InputGroupText, Row } from 'reactstrap';  


function AddBeneficiary(props) {  


  const [beneficiary, setbeneficiary] = useState({ Username: '',FirstName: '', LastName: '', AccountNo: '', Email: '',Phone: '', Amount: '',PIN:''});  


  const apiUrl = "https://localhost:44387/Api/Customer/addben"; 

  const resetForm = () => { 
    setbeneficiary({FirstName: '', LastName: '', AccountNo: '', Email: '',Phone: '', Amount: '',PIN:'' })
       
        }
  const Insertemployee = (e) => {  
    if(beneficiary.FirstName &&beneficiary.LastName && beneficiary.AccountNo && beneficiary.Phone && beneficiary.Amount && beneficiary.PIN )
{
    e.preventDefault();  

    const data = { Username:localStorage.getItem("token"),FirstName:beneficiary.FirstName, LastName:beneficiary.LastName, AccountNo:beneficiary.AccountNo, Email:beneficiary.Email,Phone:beneficiary.Phone, Amount:beneficiary.Amount,PIN:beneficiary.PIN };  

    axios.post(apiUrl, data)  

      .then(result => {  

        if(result.data.Status=="Success"){
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
      alert("All fields are mandatory except email");
    }
  };  

  const onChange = (e) => {  

    e.persist();  


    setbeneficiary({...beneficiary, [e.target.name]: e.target.value});  

  }  



   
  return (  
<div className="Display"> 
<br></br>
<div className="card1" style={{height:"auto"}}>
  <h3>Please fill in the beneficiary details...</h3>

    <div className="app flex-row align-items-center">  

      <Container>  

        <Row className="justify-content-center">  

          <Col md="12" lg="10" xl="8">  

          

                <Form onSubmit={Insertemployee}>  

                <InputGroup className="mb-3">  

<label className="mr-5">FirstName:</label>

<Input type="text" pattern="[A-Za-z]{1,50}"  className="col-sm-6"  name="FirstName" id="FirstName"  value={beneficiary.FirstName} onChange={ onChange }  /> 
</InputGroup>

<InputGroup className="mb-3">  

<label className="mr-5">LastName:</label>

<Input type="text" pattern="[A-Za-z]{1,50}" className="col-sm-6"  name="LastName" id="LastName"  value={beneficiary.LastName} onChange={ onChange }  /> 
</InputGroup>

<InputGroup className="mb-3">  

<label className="mr-4">Account No:</label>
<Input type="text" className="col-sm-6" pattern="[0-9]{5}"   name="AccountNo" id="AccountNo"  value={beneficiary.AccountNo} onChange={ onChange }  />  

</InputGroup>  


<InputGroup className="mb-3">  

<label className="mr-5">Email-Id :</label>
<Input type="text" className="col-sm-6" name="Email" id="Email"  value={beneficiary.Email} onChange={ onChange }  />  

</InputGroup>  


<InputGroup className="mb-3">  

<label className="mr-4">Phone No:</label>

<Input type="text" title="10 digit number starting with 6,7,8,9" pattern="[6,7,8,9]{1}[0-9]{9}" className="col-sm-6" name="Phone" id="Phone"  value={beneficiary.Phone} onChange={ onChange }  />   

</InputGroup>  



<InputGroup className="mb-3">  

<label className="mr-2">Amount(INR) :</label>
<Input type="text"  pattern="[0-9]{1,10}" className="col-sm-6" name="Amount" id="Amount" value={beneficiary.Amount} onChange={ onChange }  />  

</InputGroup>  


<InputGroup className="mb-3">  

<label className="mr-3">PIN(4 digits):</label>

<Input type="password"  pattern="[0-9]{4}" className="col-sm-6" name="PIN" id="PIN" value={beneficiary.PIN} onChange={ onChange }  />   

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

export default AddBeneficiary