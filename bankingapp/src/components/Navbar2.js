import './style3.css';
import Home from './Home';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  
import AdminCustomerDisplay from './AdminCustomerDisplay';

import AdminCustomerAdd from './AdminCustomerAdd';
import AdminCustomerEdit from './AdminCustomerEdit';

import Admintransaction  from './Admintransaction';
import AdminCheque  from './AdminCheque';
import AdminService  from './AdminService';
import AdminAMChange  from './AdminAMChange';
function Navbar2(props) {
  const logout = () => {
    localStorage.clear();
   // window.location.reload(); 
    props.history.push('/App');  
  }
  return (
    <div className="App1">
<Router>  
<nav className="navbar navbar-dark bg-primary ">
<label className="navbar-brand">Welcome Admin!!</label>
</nav>

<nav className="navbar navbar-expand-lg navbar-light  bg-primary">
 
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
      <Link to={'/Admin/Home'} className="nav-link text-white" style={{fontSize:"20px"}} >Home <span class="sr-only"></span></Link>
      </li>
    
      <li className="nav-item">
      <Link to={'/AdminViewtransaction'} className="nav-link text-white" style={{fontSize:"20px"}} >View Transactions <span class="sr-only"></span></Link>
      </li>

      <li className="nav-item dropdown">
      <div className="dropdown">
  <button style={{fontSize:"20px"}}  className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
 Customer
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
  <Link to={'/AdminCustomerDisplay'} className="dropdown-item" >View Customers</Link>
  <Link to={'/AdminCustomerAdd'} className="dropdown-item" >Create Account</Link>

  </div>
</div>
      </li>

      <li className="nav-item dropdown">
      <div className="dropdown">
  <button style={{fontSize:"20px"}}  className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Services
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">

  <Link to={'/AdminChequeTable'} className="dropdown-item">Cheque Book Table</Link>
  <Link to={'/AdminServices'} className="dropdown-item">Address/Mobile Change Table</Link>
  <Link to={'/AdminServiceTable'} className="dropdown-item">Check Service Request</Link>
  </div>
</div>
      </li>
     
    </ul>
    <form className="form-inline my-2 my-lg-0">
     
      <button className="btn btn-outline-light my-2 my-sm-0" onClick={logout} >Logout</button>
    </form>
  </div>
</nav>


<Switch>    

<Route exact path='/AdminCustomerDisplay' component={AdminCustomerDisplay} />    
<Route exact path='/Admin/Home' component={Home} />    


<Route exact path='/AdminCustomerAdd' component={AdminCustomerAdd} />    
<Route path='/edit/:username' component={AdminCustomerEdit} />    

<Route exact path='/AdminViewtransaction' component={Admintransaction} />   
<Route exact path='/AdminChequeTable' component={AdminCheque} />    
<Route exact path='/AdminServices' component={AdminService} />   
<Route exact path='/AdminServiceTable' component={AdminAMChange} />    
</Switch>    

</Router>
    </div>
  );
}

export default Navbar2;
