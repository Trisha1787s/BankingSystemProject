import React, { useState, useEffect } from 'react'  
import axios from 'axios';  
import './style3.css';
import { Button,  CardFooter, Col, Container, Form, Input, InputGroup, Label, Row } from 'reactstrap';  
function AdminCustomerEdit(props) {  

  const [customer, setcustomer] = useState({ Username: '', AccountNo: '',FirstName: '', LastName: '',Gender: '', DOB: '',Password: '', Email: '',Phone: '', Address: '',OpeningBalance: '', Pin: '',BankBranch: '', AadharNo: '',CustomerId:''});  

        const Url = "https://localhost:44387/Api/Admin/employeedetails?username=" + props.match.params.username;  

    

        useEffect(() => {  

          const GetData = async () => {  

            const result = await axios(Url);  

            setcustomer(result.data);  

          };  

          GetData();  

        }, []);  

        const UpdateEmployee = (e) => {  
          if(customer.Username && customer.AccountNo &&customer.FirstName && customer.LastName && customer.DOB && customer.Password && customer.Phone && customer.Address && customer.OpeningBalance && customer.Pin && customer.AadharNo )
          {
          e.preventDefault();  

          const data = {  Username:props.match.params.username, AccountNo:customer.AccountNo,FirstName:customer.FirstName, LastName:customer.LastName,Gender:customer.Gender, DOB:customer.DOB,Password:customer.Password, Email:customer.Email,Phone:customer.Phone, Address:customer.Address,OpeningBalance:customer.OpeningBalance, Pin:customer.Pin,BankBranch:customer.BankBranch, AadharNo:customer.AadharNo,CustomerId:customer.CustomerId };  
          axios.post('https://localhost:44387/Api/Admin/EditCust',data)  

            .then((result) => {  

              props.history.push('/AdminCustomerDisplay')  

            });  
          }
          else{
            alert("All fields are mandatory except email");
          }

        };  

        const onChange = (e) => {  

          e.persist();  

          setcustomer({...customer, [e.target.name]: e.target.value});  

        }  

        return (  
          <div className="Display">
            <br></br>
            <div className="card1" style={{height:"auto"}}>
  <h3>Edit/View Customer Details...</h3>


                <div className="app flex-row align-items-center">  

                <Container>  

                  <Row className="justify-content-center">  

                    <Col md="12" lg="10" xl="8">  

                      

                          <Form onSubmit={UpdateEmployee}>  

                           
   

<InputGroup className="mb-3">  
<label><b>Customer Id:{customer.CustomerId}</b></label>
</InputGroup>  

<InputGroup className="mb-3">  
<label><b>Username:{customer.Username}</b></label>
</InputGroup>  

<InputGroup className="mb-3">  
<Label className="mr-4">FirstName:</Label>

<Input type="text" className="col-sm-6" name="FirstName" id="FirstName" title="Characters only" pattern="[A-Za-z]{1,50}" value={customer.FirstName} onChange={ onChange }  /> 
</InputGroup>  

<InputGroup className="mb-3">  
<Label className="mr-4">LastName:</Label>

<Input type="text"  className="col-sm-6" title="Characters only" pattern="[A-Za-z]{1,50}"  name="LastName" id="LastName"  value={customer.LastName} onChange={ onChange }  />  
</InputGroup>  




<InputGroup className="mb-3">  
<label className="mr-5">Gender:</label>

<Input type="text" pattern="[A-Za-z]{4,6}"  className="col-sm-6"  name="Gender" id="Gender"  value={customer.Gender} onChange={ onChange }  />  
</InputGroup>  
<InputGroup className="mb-3">  

<label className="mr-2">Date Of Birth:</label>
<Input type="text"className="col-sm-6"  name="DOB" id="DOB" placeholder="yyyy-mm-dd" value={customer.DOB} onChange={ onChange }  />  

</InputGroup>  
                
<InputGroup className="mb-3">  

<label className="mr-4">Aadhar No:</label>
<Input type="text" className="col-sm-6" name="AadharNo" pattern="[0-9]{12}" title="12 numbers" id="AadharNo" placeholder="AadharNo" value={customer.AadharNo} onChange={ onChange }  />  

</InputGroup>  


<InputGroup className="mb-3">  

<label className="mr-5">Address:</label>
<textarea cols="100"  type="text" name="Address" id="Address"  value={customer.Address} onChange={ onChange }  />  

</InputGroup>  

<InputGroup className="mb-3">  
<label className="mr-3">Bank Branch:  </label> 
<Input type="text" name="AadharNo" pattern="[a-zA-Z]{5,20}" className="col-sm-6" name="BankBranch" id="BankBranch" placeholder="BankBranch" value={customer.BankBranch} onChange={ onChange }  />   
</InputGroup>  
<InputGroup className="mb-3">  

<label className="mr-3">Account No:                                       </label>
<Input type="text"  pattern="[0-9]{5}"   name="AccountNo" className="col-sm-6"  name="AccountNo" id="AccountNo" placeholder="AccountNo" value={customer.AccountNo} onChange={ onChange }  />  

</InputGroup>  
<InputGroup className="mb-3">
<label className="mr-2">Opening Balance:{customer.OpeningBalance}                                </label>

</InputGroup>  


<InputGroup className="mb-3">  

<label className="mr-3">PIN(4 digit):                                     </label>
<Input type="text" pattern="[0-9]{4}" className="col-sm-6" name="Pin" id="Pin" placeholder="Pin" value={customer.Pin} onChange={ onChange }  />  

</InputGroup>  

 <InputGroup className="mb-3">  

 <label className="mr-4"> Password:     </label>

<Input type="text" pattern="[0-9a-zA-Z]{5,10}" title="Only letters and numbers max 10 and min 5" className="col-sm-6" name="Password" id="Password" placeholder="Password" value={customer.Password} onChange={ onChange }  />   

</InputGroup>  







               <CardFooter className="p-4">  

                          <Row>  

                          

                            <Col xs="10" sm="6">  

                              <Button type="submit" className="btn btn-info" block><span>Update</span></Button>  

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

export default AdminCustomerEdit 


