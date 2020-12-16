import './style3.css';
function Home(props) {
    return (
      <div className="Display" >
        <br></br>
        <br></br>
        <div className="card1" style={{width: "100px;"}}>
    <h1 style={{color:"blue"}}>Welcome Admin!</h1>
  
    <h5 style={{padding:"30px"}}>
     From here you can manage all of core Internet Banking settings.You can add/manage customers,view their transactions,edit their details and even delete them.You can also post news on the website.  
   
 
        Please keep in mind that with big power comes big resposibility.Therefore please do not misuse your admin control to create trouble.
    </h5>
    </div>
      </div>
    );
  }
  
  export default Home;