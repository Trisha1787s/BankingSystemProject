

import Transactionlist from './Customer/Transactionslist';
import { browserHistory } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  
import ReactDOM from 'react-dom';
import AdminCustomerEdit from './AdminCustomerEdit';
import CustomerEdit from './Customer/CustomerEdit';
import CustomerHome from './Customer/CustomerHome';
import TransactionAdd from './Customer/TransactionAdd';


import AddBeneficiary from './Customer/AddBeneficiary';
import CustomerMini from './Customer/CustomerMini';
import CustomerRequest from './Customer/CustomerRequest';
import CustomerTrackService from './Customer/CustomerTrackService';
import Customerpasswordchange from './Customer/Customerpasswordchange';
import axios from 'axios';  
function Navbar3(props) {
    const eventhandle=()=>{
        window.location.href="CustomerEdit.js";
        //ReactDOM.render(<CustomerEdit/>, document.getElementById('Display5'));
    }
  const logout = () => {
    localStorage.clear();
    //window.location.reload(); 
   props.history.push('/App');  
  }

  const requestcheque=()=>{
    const apiUrl = "https://localhost:44387/Api/Customer/RequestCheque?username=";  
   const data=localStorage.getItem("token")
    axios.post(apiUrl+data) .then((result) => {  
alert("Please collect your cheque book from the nearest branch of our bank");
     

    });  
   
  }
  return (
    <div className="App1">
<Router> 
<nav className="navbar navbar-dark bg-primary ">
<label className="navbar-brand">Welcome {localStorage.getItem('token')}!</label>
</nav>

<nav className="navbar navbar-expand-lg navbar-light  bg-primary">

<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item dropdown">
      <Link  to={'/CustomerHome'}className="nav-link text-white active" style={{fontSize:"20px"}} >Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item ">
      <Link to={'/CustomerEdit'} className="nav-link text-white" style={{fontSize:"20px"}} >User Details<span class="sr-only">(current)</span></Link>
      </li>
    
 

      <li class="nav-item dropdown">
      <div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" style={{fontSize:"20px"}}  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Transactions
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
  <Link to={'/MiniTransaction'} class="dropdown-item" >Mini Statement</Link>
  <Link to={'/Transactionlist'} class="dropdown-item" >Detailed Statement</Link>

  </div>
</div>
      </li>


      <li class="nav-item dropdown">
      <div class="dropdown">
  <button class="btn btn-primary dropdown-toggle"style={{fontSize:"20px"}}  type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Fund Transfer
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
  <Link to={'/TransactionAdd'} class="dropdown-item" >ATM Simulator</Link>
  <Link to={'/AddBeneficiary'} class="dropdown-item" >Fund Transfer</Link>

  </div>
</div>
      </li>


      <li class="nav-item dropdown">
      <div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" style={{fontSize:"20px"}}  type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Services
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">

  <Link to={'/CustomerRequest'} class="dropdown-item">Request change in A/M</Link>
    <Link class="dropdown-item" ><button onClick={requestcheque} className="btn bg-light">Request cheque book</button></Link>
    <Link to={'/CustomerTrackService'} class="dropdown-item">Track service Request</Link>

  </div>
</div>
      </li>
      <li class="nav-item active">
      <Link to={'/Customerpasswordchange'} className="nav-link text-white" style={{fontSize:"20px"}} >Change Password<span class="sr-only"></span></Link>
      </li>

    </ul>
    <form class="form-inline my-2 my-lg-0">
     
      <button class="btn btn-outline-light my-2 my-sm-0" onClick={logout} >Logout</button>
    </form>
  </div>
</nav>


<Switch>    
<Route exact path='/CustomerHome' component={CustomerHome} />   

<Route exact path='/CustomerEdit' component={CustomerEdit} />   
<Route exact path='/Transactionlist' component={Transactionlist} />   
<Route exact path='/TransactionAdd' component={TransactionAdd} />   
 

<Route exact path='/AddBeneficiary' component={AddBeneficiary} /> 
<Route exact path='/MiniTransaction' component={CustomerMini} />
<Route exact path='/CustomerRequest' component={CustomerRequest} /> 
<Route exact path='/CustomerTrackService' component={CustomerTrackService} /> 
<Route exact path='/Customerpasswordchange' component={Customerpasswordchange} /> 
 
</Switch>    

</Router>
    </div>
  );
}

export default Navbar3;
