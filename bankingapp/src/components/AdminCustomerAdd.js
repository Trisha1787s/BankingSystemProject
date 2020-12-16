import React, { useState, useEffect } from 'react'  
import './style3.css';

import axios from 'axios';  

import { Button,  CardFooter, Col, Container, Form, Input, InputGroup, Row } from 'reactstrap';  


function AdminCustomerAdd(props) {  


  const [customer, setcustomer] = useState({ Username: '', AccountNo: '',FirstName: '', LastName: '',Gender: '', DOB: '',Password: '', Email: '',Phone: '', Address: '',OpeningBalance: '', Pin: '',BankBranch: '', AadharNo: ''});  

 

  const apiUrl = "https://localhost:44387/Api/Admin/CustAdd";  
  const resetForm = () => { 
    setcustomer({Username: '', AccountNo: '',FirstName: '', LastName: '', DOB: '',Password: '', Email: '',Phone: '', Address: '',OpeningBalance: '', Pin: '', AadharNo: '' })
       
        }
  const Insertemployee = (e) => {  
    if(customer.Username && customer.AccountNo &&customer.FirstName && customer.LastName && customer.DOB && customer.Password && customer.Phone && customer.Address && customer.OpeningBalance && customer.Pin && customer.AadharNo )
 {
    e.preventDefault();  

    const data = {  Username:customer.Username, AccountNo:customer.AccountNo,FirstName:customer.FirstName, LastName:customer.LastName,Gender:customer.Gender, DOB:customer.DOB,Password:customer.Password, Email:customer.Email,Phone:customer.Phone, Address:customer.Address,OpeningBalance:customer.OpeningBalance, Pin:customer.Pin,BankBranch:customer.BankBranch, AadharNo:customer.AadharNo };  

    axios.post(apiUrl, data)  

      .then(result => {  
        if(result.data.Status=="Success"){
alert("Added successfully.Going to View page");
        props.history.push({  
    
         
                pathname: '/edit/' + customer.Username  
        
              })  }
              else{
                alert("Unsuccessful operation");
              }

      });  
    }
    else{
      alert("All fields are mandatory except email");
      e.preventDefault();  
    }
    
  };  

  const onChange = (e) => {  

    e.persist();  


    setcustomer({...customer, [e.target.name]: e.target.value});  

  }  

 const onChangeValue=(event)=> {
  setcustomer({...customer, [customer.Gender.name]: event.target.value});  
  }


   
  return (  
  <div className="Display" > 
  <br></br>
  <div className="card1" style={{height:"auto"}}>
  <h3>Please fill in the following details...</h3>
 <br></br>
    <div className="app flex-row align-items-center">  
   <Container>

        <Row className="justify-content-center">  

          <Col md="12" lg="10" xl="8">  

          

                <Form onSubmit={Insertemployee}>  

   
<div className="row">
    <div className="col">
    <Input type="text" name="FirstName" id="FirstName" title="Characters only" pattern="[A-Za-z]{1,50}" placeholder="First Name"  value={customer.FirstName} onChange={ onChange }  /> &nbsp;&nbsp;&nbsp; 

    </div>
    <div className="col">
    <Input type="text" name="LastName" id="LastName" title="Characters only" pattern="[A-Za-z]{1,50}" placeholder="Last Name" value={customer.LastName} onChange={ onChange }  /> &nbsp;&nbsp;&nbsp; 
    </div>
  </div> 
<InputGroup>
<div className="radio-buttons">

<label>Gender:</label>  &nbsp;&nbsp; 
        <input
          name="Gender" id="Male" placeholder="Gender" value="Male" onChange={ onChange } 
          type="radio"
     
       />  Male&nbsp;&nbsp;&nbsp; 

        <input
         name="Gender" id="Famale" placeholder="Gender" value="Female" onChange={ onChange } 
          type="radio"
         
        />   Female&nbsp;&nbsp;&nbsp; 

        <input
         name="Gender" id="Other" placeholder="Gender" value="Other" onChange={ onChange } 
          type="radio"
      
        />   Other
      </div>
      </InputGroup>

      <InputGroup className="mb-3">  

<label>Date Of Birth:</label>&nbsp;&nbsp;&nbsp; 

<Input className="col-sm-6" type="text" name="DOB" id="DOB"  type="date" placeholder="yyyy-mm-dd" value={customer.DOB} onChange={ onChange }  />  
</InputGroup>  
                
<InputGroup className="mb-3">  

<label>Aadhar No:</label>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; 
<Input type="text" title="12 numbers" pattern="[0-9]{12}"  className="col-sm-6" name="AadharNo" id="AadharNo" placeholder="AadharNo" value={customer.AadharNo} onChange={ onChange }  />  

</InputGroup>  

<InputGroup className="mb-3">  

   
<label className="mr-5">Email:</label>&nbsp;&nbsp; &nbsp;
    <Input type="email" className="col-sm-6"  name="Email" id="Email" placeholder="Email" value={customer.Email} onChange={ onChange }  />

    
   
 
</InputGroup>  


<InputGroup className="mb-3">  

   
<label>Phone No:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;  
    <Input type="tel" className="col-sm-6" title="10 digit number starting with 6,7,8,9" pattern="[6,7,8,9]{1}[0-9]{9}"  name="Phone" id="Phone" placeholder="Phone" value={customer.Phone} onChange={ onChange }  />

    
   
 
</InputGroup>  



<InputGroup className="mb-3">  

<label>Address:                                       </label>
<textarea cols="100" type="text" name="Address" id="Address"   value={customer.Address} onChange={ onChange }  />  

</InputGroup>  

<InputGroup className="mb-3">  
<label>Bank Branch:  </label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<select id = "BankBranch" name="BankBranch" onChange={ onChange } >
    <option    value="Mysore">Mysore </option>
    <option   value="Bangalore" >Bangalore</option>
    <option   value="Mangalore">Mangalore</option>
    
</select>
</InputGroup>  
<InputGroup className="mb-3">  

<label>Account No:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<Input type="text" className="col-sm-6" pattern="[0-9]{5}"   name="AccountNo" id="AccountNo" placeholder="AccountNo" value={customer.AccountNo} onChange={ onChange }  />  

</InputGroup>  





<InputGroup className="mb-3">  

<label>Opening Balance(NR):</label>&nbsp;

<Input type="text" className="col-sm-6" name="OpeningBalance" id="OpeningBalance"  pattern="[0-9]{1,10}"  placeholder="OpeningBalance" value={customer.OpeningBalance} onChange={ onChange }  /> 


</InputGroup>  

<InputGroup className="mb-3">  

<label className="mr-4">PIN(4 digits):</label>&nbsp;


<Input type="text" className="col-sm-6" name="Pin" id="Pin"pattern="[0-9]{4}"  placeholder="Pin" value={customer.Pin} onChange={ onChange }  />  

</InputGroup>  



<InputGroup className="mb-3">  

<label className="mr-5">Username:</label>
<Input type="text" pattern="[0-9a-zA-Z]{5,20}" title="Only letters and numbers max 20" className="col-sm-6" name="Username" id="Username" placeholder="Username" value={customer.Username} onChange={ onChange }  />  

</InputGroup>  


<InputGroup className="mb-3">  

<label className="mr-5">Password:</label>

<Input type="text" pattern="[0-9a-zA-Z]{5,10}" title="Only letters and numbers max 10 and min 5" className="col-sm-6" name="Password" id="Password" placeholder="Password" value={customer.Password} onChange={ onChange }  />  
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

export default AdminCustomerAdd