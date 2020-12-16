import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import Customer from './Customer';
import Admin from './Admin';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';   
import Navbar2 from './Navbar2';
import App from '../App'
import { hashHistory } from 'react'
 import './style1.css';
export default class Login extends React.Component{
    constructor(props){
        super(props);

        this.state={
            Username:'',
            Password:'',
          
        }


        this.Password=this.Password.bind(this);
        this.Username=this.Username.bind(this);
        this.login=this.login.bind(this);
    }
    componentDidMount(){
       this.setState({name:localStorage.getItem('token')});
    }
    Username(event) {
        
                this.setState({ Username: event.target.value })
       
            }
       
         Password(event) {
       
                this.setState({ Password: event.target.value })
        
            }
     
            login(event) {
      
               // debugger;

               if(this.state.Password && this.state.Username){
      
                fetch('https://localhost:44387/Api/login/Login', {
        
                    method: 'post',
     
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
      
                    body: JSON.stringify({
 
                        Username: this.state.Username,
                        Password: this.state.Password
    
                    })
     
                }).then((Response) => Response.json())
      
                    .then((result) => {
       
                        console.log(result);
     
                        if (result.Status == 'Invalid')
  {
                            alert('Invalid User');
                        
                            
  }
    
                        else if(result.Status=='Admin'){
                            alert('Admin login successful');
                   
                        localStorage.setItem('token',"admin");
                        window.location.reload(); 

                             
                        }
                        else{
                        alert('customer login successful');
                        localStorage.setItem('token',this.state.Username);
                        window.location.reload();
                        }
                           
                    })

                }
                else{
                    alert("Both username and password are mandatory");
                  
                }
     
            }


    render() {
 
 
                return ( 


                    
                    <div >

                         <div className="Picture1" style={{width:"1600px"}}>
     
    </div> 
                    <div >
                    
                        {/* <Container>
                        {/* className="justify-content-center" */}
                        {/* <Row >
                         <Col>
                         <CardGroup>
                        <Card className="p-2">
                        <h1>Login</h1>
                        <CardBody>
                         <Form>
                         <div class="row" className="mb-2 pageheading">
                        
       </div>
    <InputGroup className="mb-3">
                                                        <Input pattern="[0-9a-zA-Z]{5,20}" type="text" onChange={this.Username} placeholder="Enter Username" />

                                                    </InputGroup>
        
                                                    <InputGroup className="mb-4">
      
                                                   
                                                        <Input type="password" pattern="[0-9a-zA-Z]{5,10}" onChange={this.Password} placeholder="Enter Password" />
       
                                                    </InputGroup>
                   
                                                    <div class="text-left"> 
                                                    {/* <Button onClick={this.login} color="success" block>Login</Button> */}
                                                    {/* <button onClick={this.login} type="button" class="btn btn-success">Login</button>
                                              </div>
                                                </Form>
     
                                            </CardBody>
    
                                        </Card>
      
                                    </CardGroup>
        
                                </Col>
       
                            </Row>
       
                        </Container> */} 
    
                        
                    </div>

                   
                    
            <div className="Editing3">
         
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 video-div"  >
                <div className="video-txt"><h3><span></span></h3>
             </div>
                <div className="video-img">
                   <h4>Login</h4>
                <Form style={{width:"400px"}}>
                         <div class="row" className="mb-2 pageheading">
                        
       </div>
    <InputGroup className="mb-3">
                                                        <Input pattern="[0-9a-zA-Z]{5,20}" type="text" onChange={this.Username} placeholder="Enter Username" />

                                                    </InputGroup>
        
                                                    <InputGroup className="mb-4">
      
                                                   
                                                        <Input type="password" pattern="[0-9a-zA-Z]{5,10}" onChange={this.Password} placeholder="Enter Password" />
       
                                                    </InputGroup>
                   
                                                    <div class="text-left"> 
                                                   <Button className="mb-3" onClick={this.login} color="primary" block>Login</Button> 
                                                    {/* <button className="mb-3" onClick={this.login} type="button" class="btn btn-success">Login</button> */}
                                              </div>
                                                </Form>
                                                
                </div>
                </div>


                
            </div>   
         

                
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 video-div"  >
               
                <div className="Editing4">
           
      
            <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
</div>
</div>
            </div>
       
                );
        
            
}}



