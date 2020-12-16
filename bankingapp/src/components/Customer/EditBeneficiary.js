import React, { useState, useEffect } from 'react'  
import axios from 'axios';  
import '../style2.css';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  
function EditBeneficiary(props) {  

  const [ben1, setben] = useState({ BId: '', ToFirstName: '', ToLastName: '', ToAccountNo: '', ToEmail: '',ToPhone: '', ToAmount: '',AccountNo: ''});  

        const Url = "https://localhost:44387/Api/Customer/getben?username=" + localStorage.getItem("token");  

        const resetform = () => { 
         setben({ToAmount: ''});
             
             }

        useEffect(() => {  

          const GetData = async () => {  

            const result = await axios(Url);  

            setben(result.data);  
            
            

          };  

          GetData();  

        }, []);  

        const UpdateEmployee = (e) => {  
         
       

            e.preventDefault();  

            const data = { BId:ben1.BId, ToFirstName:ben1.ToFirstName, ToLastName:ben1.ToLastName, ToAccountNo:ben1.ToAccountNo, ToEmail:ben1.ToEmail,ToPhone:ben1.ToPhone, ToAmount:ben1.ToAmount,AccountNo:ben1.AccountNo  };  
            axios.post('https://localhost:44387/Api/Customer/benedit', data)  
  
              .then((result) => {  
  
                props.history.push('/Beneficiarylist')  
  
              });  
  
          
         
         
        
        };  

        const onChange = (e) => {  

          e.persist();  

          setben({...ben1, [e.target.name]: e.target.value});  

        }  

        return (  
          <div className="Display5">
  <h3>Transfer Funds...</h3>
  <hr></hr>

                <div className="app flex-row align-items-center">  

                <Container>  

                  <Row className="justify-content-center">  

                    <Col md="12" lg="10" xl="8">  

                      

                          <Form onSubmit={UpdateEmployee}>  

                           
                          {/* <InputGroup className="mb-3">  
<label>Customer ID:{customer.CustomerId}</label>
</InputGroup>   */}

<InputGroup className="mb-3">  
<label>To:{ben1.ToFirstName} {ben1.ToLastName} </label>
</InputGroup>  


 <InputGroup className="mb-3">  
<label>Account No:{ben1.ToAccountNo}</label>
</InputGroup>  
<InputGroup>
<pre>Enter Amount(in INR):                             </pre>
<Input type="text"  name="ToAmount" id="ToAmount" placeholder="ToAmount" value={ben1.ToAmount} onChange={ onChange }  />  

</InputGroup>  





<InputGroup>
<pre>Password:                                         </pre>
<Input type="password"  name="pwd" id="pwd" />  

</InputGroup>  










<br></br>




               <CardFooter className="p-4">  

                          <Row>  

                            <Col xs="12" sm="3">  

                              <Button onClick={()=>props.history.push('/Beneficiarylist')}  className="btn btn-success mb-1" block><span>Go Back</span></Button>  

                            </Col>  

                            <Col xs="12" sm="3">  

                              <Button type="submit" className="btn btn-info mb-1" block><span>Submit</span></Button>  

                            </Col>  

                            <Col xs="12" sm="3">  

<Button type="submit" className="btn btn-danger mb-1" onClick={resetform} block><span>Reset</span></Button>  

</Col>  

                          </Row>  

                        </CardFooter>  

                          </Form>  

                       

                    </Col>  

                  </Row>  

                </Container>  

              </div>  
              </div>  

        )  

}  

export default EditBeneficiary


