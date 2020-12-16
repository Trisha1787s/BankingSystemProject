
import './App.css';

import Navbar1 from './components/Navbar1';
import Navbar2 from './components/Navbar2';
import Navbar3 from './components/Nabar3';
import Login from './components/Login';

import React, { Component } from 'react';
class App extends React.Component 
{
  constructor(props){
    super(props);

    this.state={
      
        name:''
    }


  
}
componentDidMount(){
   this.setState({name:localStorage.getItem('token')});
}


     
  render(){
    if(this.state.name=="admin" ){
    return(   
       <div className="App" >
    <Navbar2></Navbar2>
  </div>
     );
    }
    else{
      if(this.state.name){
        return(   
          <div className="App" >
       <Navbar3 ></Navbar3>
     </div>
        );
      }
    else{
  return (

   <div className="App">
     <Navbar1></Navbar1>
     
     </div>

  
  );}
}}
}
export default App;
