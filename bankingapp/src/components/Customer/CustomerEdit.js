import React, { useState, useEffect } from 'react'  
import axios from 'axios';  
import '../style3.css';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  
function CustomerEdit(props) {  

  const [customer, setcustomer] = useState({ Username: '', AccountNo: '',FirstName: '', LastName: '',Gender: '', DOB: '',Password: '', Email: '',Phone: '', Address: '',OpeningBalance: '', Pin: '',BankBranch: '', AadharNo: '',CustomerId:''});  

        const Url = "https://localhost:44387/Api/Admin/employeedetails?username=" + localStorage.getItem("token");  

      

        useEffect(() => {  

          const GetData = async () => {  

            const result = await axios(Url);  

            setcustomer(result.data);  
           
          
          };  

          GetData();  

        }, []);  

       

 

        return (  
          <div className="Display5">
            <br></br>
            <div className="card1" style={{height:"700px"}}>
  <h3>Your Account Details...</h3>
  

                <div className="app flex-row align-items-center">  

                <Container>  

                  <Row className="justify-content-center">  

                    <Col md="12" lg="10" xl="8">  

                      

                          <Form>  

                           
   
<br></br>
<InputGroup className="mb-3">  
<label style={{color:"blue"}}>Username:{customer.Username}</label>
</InputGroup>   
<InputGroup className="mb-3">  
<label>FirstName: {customer.FirstName}   </label>

</InputGroup>  
<InputGroup className="mb-3">  

<label>LastName:{customer.LastName}</label>
</InputGroup>  
<InputGroup className="mb-3">  
<label style={{color:"blue"}}>Account No:{customer.AccountNo}</label>
</InputGroup> 

<InputGroup className="mb-3">  
<label style={{color:"red"}}>Balance(INR):{customer.OpeningBalance} </label>
</InputGroup> 
 <InputGroup className="mb-3">  
 <label>Gender:{customer.Gender}</label>
</InputGroup>  

<InputGroup className="mb-3">  
<label>Date Of Birth:{customer.DOB}</label>
</InputGroup> 
<InputGroup className="mb-3">  
<label>Aadhar No:{customer.AadharNo} </label>
</InputGroup> 
 <InputGroup className="mb-3">  
<label>Email Id:{customer.Email}</label>
</InputGroup>   

 

<InputGroup className="mb-3">  
<label>Address:{customer.Address}</label>
</InputGroup>   
 
<InputGroup className="mb-3">  
<label>Phone No:{customer.Phone}</label>
</InputGroup>

  </Form>  

                       

                    </Col>  

                  </Row>  

                </Container>  
                </div>
              </div>  
              </div>  

        )  

}  

export default CustomerEdit 


