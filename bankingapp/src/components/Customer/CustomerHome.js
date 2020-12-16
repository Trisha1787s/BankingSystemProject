import React, { useState, useEffect } from 'react'  
import axios from 'axios';  
import '../style3.css';
import { Col, Container, Form,  InputGroup, Row } from 'reactstrap';  
function CustomerHome(props) {  

  const [customer, setcustomer] = useState({ First: '', Second: '',Third: '', Fourth: '',Fifth: '', name1: '',name2: ''});  

        const Url = "https://localhost:44387/Api/Customer/customerhome?username=" + localStorage.getItem("token");  

        

        useEffect(() => {  

          const GetData = async () => {  

            const result = await axios(Url);  

            setcustomer(result.data);  
localStorage.setItem("count",customer.Third)
          };  

          GetData();  

        }, []);  

       

 

        return (  
          <div className="Display" >
            <br></br>
            <div className="card1">
  <h3 style={{color:"blue"}}>Welcome,{customer.name1} {customer.name2}! </h3>
  <h4>Ac/No:{customer.First}</h4>


                <div className="app flex-row align-items-center">  

                <Container>  

                  <Row className="justify-content-center">  

                    <Col md="12" lg="10" xl="8">  

                      

                          <Form>  

                           

<InputGroup className="mb-3">  
<label><b>Balance(INR):</b>{customer.Second}/- </label>
</InputGroup> 

  
<InputGroup className="mb-3">  
<label><b>You have :</b>{customer.Third} total transactions</label>
</InputGroup> 

<InputGroup className="mb-3">  
<label><b>Your last transaction:</b>{customer.Fifth}  </label>
<label>&nbsp; with Remarks {customer.Fourth}</label>
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

export default CustomerHome 


