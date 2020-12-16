import React, { useState, useEffect } from 'react'  
import './style2.css';
import axios from 'axios';  

import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  

function AdminAddPost(props) {  

  const [newss, setnewss] = useState({ NewsHeadline: '', Details: ''});  

  const [showLoading, setShowLoading] = useState(false);  

  const apiUrl = "https://localhost:44387/Api/Admin/Posting";  

  const Insertemployee = (e) => {  
    if(newss.NewsHeadline=='' && newss.Details==''){
      alert("All Fields are required");
    }

    e.preventDefault();  

    const data = { NewsHeadline:newss.NewsHeadline, Details: newss.Details };  

    axios.post(apiUrl, data)  

      .then((result) => {  

        props.history.push("/PostSuccessPage");

      });  

  };  
 const resetForm = () => { 
setnewss({ NewsHeadline: '',Details: '' })
   
    }
 
  const onChange = (e) => {  

    e.persist();  


    setnewss({...newss, [e.target.name]: e.target.value});  

  }  

  return (  
    <div className="Display2">

    <div className="app flex-row align-items-center">  

      <Container>  

        <Row className="justify-content-center">  

          <Col md="12" lg="10" xl="8">  

         

                <form >  
                <InputGroup>
              
                <label for="exampleFormControlInput1">News Headline:</label>
                </InputGroup>
                <InputGroup>
                <input type="text" name="NewsHeadline" id="NewsHeadline"  value={newss.NewsHeadline} onChange={ onChange }  required />  
                </InputGroup>

                <InputGroup>
                 <label >Details:</label>
             
             <textarea  type="text" rows="3" cols="50" name="Details" id="Details"  value={newss.Details} onChange={ onChange } required />  
             </InputGroup>
               
               
                    


    

                <Row>  

                  <Col xs="12" sm="2">  

                    <input type="submit" className="btn btn-info" block onClick={Insertemployee}/>
                   

                  </Col>  

                  <Col xs="12" sm="2">  

                     {/* <Button type="reset" className="btn btn-info mb-1" block><span>Reset</span></Button>    */}
                   < input type="reset" onClick={resetForm} className="btn btn-danger"/>


                  </Col>  

                </Row>  

       

                </form>  
 

          </Col>  

        </Row>  

      </Container>  

    </div>  
    </div>
  )  

}  

export default AdminAddPost