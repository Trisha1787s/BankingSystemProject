import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

 import '../style.css';
export default class OpeningPage extends React.Component{
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
                      //props.history.push('/App');  

                             
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
        const style2={
            width:"100px",
            marginLeft:"20px",
            marginRight:"20px",
            background:"lightblue"
        }

        const style3={
            width:"100px",
            marginLeft:"20px",
            marginRight:"20px",
           
        }
 
                return ( 

<div className="Editing5" >
<div className="Images"></div>
       <div>
       <div>
         
    
      
                <Form className="Form1">
                <h4>Login</h4>
                         <div class="row" className="mb-2 pageheading">
                        
       </div>
    <InputGroup className="mb-3" >
                                                        <Input style={style2} pattern="[0-9a-zA-Z]{5,20}" type="text" onChange={this.Username} placeholder="Enter Username" />

                                                    </InputGroup>
        
                                                    <InputGroup className="mb-4">
      
                                                   
                                                        <Input style={style2}  type="password" pattern="[0-9a-zA-Z]{5,10}" onChange={this.Password} placeholder="Enter Password" />
       
                                                    </InputGroup>
                   
                                                    <div class="text-left"> 
                                                   <Button style={style3}  className="mb-3" onClick={this.login} color="primary" block>Login</Button> 
                                                    {/* <button className="mb-3" onClick={this.login} type="button" class="btn btn-success">Login</button> */}
                                              </div>
                                                </Form>
                                               </div>
       </div>

<br></br>

       <div><h1>What's New</h1></div>
       <div className="row">
       <div className="card text-center" style={{marginLeft:"200px"}}>
  <div className="card-header">
   
  </div>
  <div className="card-body" style={{backgroundColor:'#ffff80'}}>
    <h5 className="card-title">Holiday Savings Account</h5>
    <p className="card-text" >Advance planning and regular saving will ensure that your holiday does not remain just a dream but turns to reality! State Bank of India in association with Thomas Cook India presents a unique savings plan for holiday goers. Under this scheme you can save monthly amounts in the form of a recurring deposit with the Bank in order to avail a vacation package listed under Holiday Savings Account packages on Thomas Cook website.</p>
  
  </div>
  <div className="card-footer text-muted">
 
  </div>
</div>
<div className="card text-center">
  <div className="card-header">
  
  </div>
  <div className="card-body" style={{backgroundColor:' #ffff66'}}>
    <h5 className="card-title">Loyalty Points</h5>
    <p className="card-text"> Rewardz, we believe that you must be rewarded whenever you make use of State Bank products or services. State Bank Rewardz will reward you in multiple ways that will get you your desired reward and /or service as fast as possible. From shopping with your Debit Card to paying timely EMI for your loan, you earn Reward Points for a variety of transactions. You then redeem, i.e. use your accumulated Reward Points to pay for a wide range of products & services such as movie tickets, air tickets, mobile/DTH recharge, apparel, electronics, home appliances and more.</p>
    
  </div>
  <div className="card-footer text-muted">
 
  </div>
</div>
<div className="card text-center">
  <div className="card-header">
   
  </div>
  <div className="card-body" style={{backgroundColor:'#ffff1a'}}>
    <h5 className="card-title">mCash</h5>
    <p className="card-text">mCASH is a simple and quick way to claim funds sent by  of
India customers through Internet banking or  Anywhere mobile application
based on just mobile number or email id.
Any  customer having Internet banking facility can now transfer funds to a third
party without registration of beneficiary by entering beneficiary mobile number or
email-ID by just selecting from the contact list of their phones</p>
  
  </div>
  <div className="card-footer text-muted">
   
  </div>
</div>
<div className="card text-center"  style={{marginLeft:"200px"}}>
  <div className="card-header">
 
  </div>
  <div className="card-body" style={{backgroundColor:'#b3ffff'}}>
    <h5 className="card-title">Loan</h5>
    <p className="card-text"></p>
    For meeting contingencies and needs of personal nature. Loan will be permitted for subscribing to rights or new issue of shares against the security of existing shares. Loan will not be sanctioned for (i) speculative purposes (ii) inter-corporate investments or (iii) acquiring controlling interest in company / companies

Loan Amount

Minimum Loan Amount : Rs 50,000/-
Maximum Loan:Rs 20.00 lacs
  </div>
  <div className="card-footer text-muted">
  
  </div>
</div>
<div className="card text-center">
  <div className="card-header">
  
  </div>
  <div className="card-body" style={{backgroundColor:'#ccffff'}}>
    <h5 className="card-title">Loan Against Time Deposit</h5>
    <p className="card-text">For meeting contingencies and needs of personal nature. Loan will be permitted for subscribing to rights or new issue of shares against the security of existing shares. Loan will not be sanctioned for (i) speculative purposes (ii) inter-corporate investments or (iii) acquiring controlling interest in company / companies

Loan Amount

Minimum Loan Amount : Rs 20,000/-
Maximum Loan:Rs 30.00 lacs</p>

  </div>
  <div className="card-footer text-muted">
  
  </div>
</div>
<div className="card text-center">
  <div className="card-header">
  
  </div>
  <div className="card-body" style={{backgroundColor:'#4dffff'}}>
    <h5 className="card-title">Loan Against Shares</h5>
    <p className="card-text">For meeting contingencies and needs of personal nature. Loan will be permitted for subscribing to rights or new issue of shares against the security of existing shares. Loan will not be sanctioned for (i) speculative purposes (ii) inter-corporate investments or (iii) acquiring controlling interest in company / companies

Loan Amount

Minimum Loan Amount : Rs 70,000/-
Maximum Loan:Rs 90.00 lacs</p>

  </div>
  <div className="card-footer text-muted">
  
  </div>
</div>

</div>

<div style={{marginBottom:"100px"}}></div>
    </div>
  )  

}  }
