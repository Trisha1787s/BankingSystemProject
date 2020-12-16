import './style.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  

import About from './HomeContent/About';
import UserManual from './HomeContent/UserManual'
import Digital from './HomeContent/Digital'
import OpeningPage from './HomeContent/OpeningPage'

function Navbar1(props) {
  return (
    <Router>      
    <div className="container" >      

<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">  
<nav className="navbar navbar-dark bg-primary ">
<label className="navbar-brand"> <Link to={'/'}className="nav-link text-white" style={{fontSize:"30px"}} >YONO.com</Link>   </label>
</nav>

        <div className="collapse navbar-collapse" >      
          <ul className="navbar-nav mr-auto">   
          <li className="active">      
              <Link to={'/' }className="nav-link text-white active" style={{fontSize:"20px"}} >Home</Link>      
            </li>      
            <li className="nav-item">      
              <Link to={'/About'}className="nav-link text-white" style={{fontSize:"20px"}} >About Us</Link>      
            </li>    
            <li className="nav-item">      
              <Link to={'/Digital'} className="nav-link text-white" style={{fontSize:"20px"}} >Digital</Link>      
            </li>    
            <li className="nav-item">      
              <Link to={'/UserManual'} className="nav-link text-white" style={{fontSize:"20px"}} >User Manual</Link>      
            </li>    
            {/* <li className="nav-item">      
              <Link to={'/News'}className="nav-link text-white"><b>Information And Services</b></Link>      
            </li>     */}
             
          </ul>      
        </div>      
      </nav> <br />    
     

  </div>
  {/* <div className="Picture1" style={{width:"1600px"}}>
     
    </div>  */}

{/* <div className="Video1">
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 video-div"  >
                <div className="video-txt"><h3><span></span></h3>
             </div>
                <div className="video-img">
                    <a href="javascript:void(0);"><iframe width="1300px" height="200px" src="https://www.youtube.com/embed/We_elS7C4_A" frameborder="0" allowfullscreen=""></iframe>
                    </a>
                </div>
                </div>


                
            </div>     */}

             <Switch>        
        <Route exact path='/' component={OpeningPage} />     
        <Route exact path='/About' component={About}/>
        <Route exact path='/Digital' component={Digital}/>
        <Route exact path='/UserManual' component={UserManual}/>
   
      </Switch>       
  </Router>     );
}

export default Navbar1;
