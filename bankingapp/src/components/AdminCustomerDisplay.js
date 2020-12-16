import React from 'react'  
import { Col, Row, Table } from 'reactstrap';  
import axios from 'axios';  
import { useState, useEffect } from 'react'  
import './style3.css';
export default function AdminCustomerDisplay(props) {  

  const [data, setData] = useState([]);  
  const [name,setname]=useState({Username:''});

  useEffect(() => {  
   
    const GetData = async () => {  
      const result = await axios('https://localhost:44387/Api/Admin/CustRecord');  
      setData(result.data);  
    };  

    GetData();  
 }, []); 
 
 const onChange = (e) => {  

  e.persist();  


  setname({...name, [e.target.name]: e.target.value});  

}  
onsubmit = (e) => {    

if(name.Username){
  const GetData = async () => {  
    const result = await axios('https://localhost:44387/Api/Admin/customersearch?username='+name.Username );  
    setData(result.data);  
  };  

  GetData();  

}
else{
  const GetData = async () => {  
    const result = await axios('https://localhost:44387/Api/Admin/CustRecord');  
    setData(result.data);  
  };  

  GetData();  
}


}     
  return (  


    <div className="Display" >

    <div className="animated fadeIn">  
      <Row>  

        <Col>  

       
<br></br>
<br></br>

<div >
<div className="row hdr" >  

    <div className="col-sm-3 form-group">  </div>  

    <div className="col-sm-3 form-group">  
    <label>Username:</label>&nbsp;&nbsp; 
    <input  pattern="[0-9a-zA-Z]{5,20}" title="characters and numbers only max 20" type="text" className="col-sm-6" name="Username" id="Username" placeholder="Username" value={name.Username} onChange={ onChange }  />  
    </div>  


    <div className="col-sm-2 form-group">  

        <button type="submit" className="btn btn-success" onClick={onsubmit} >Search</button>  

    </div>  

</div>  



              <Table className="table table-hover">  

               <thead className="thead-dark">
                   <tr>
                       <th>CustomerId</th>
                       <th>FirstName</th>
                       <th>LastName</th>
                      
                       <th>Username</th>
                       <th>AccountNo</th>
                      
                   </tr>
               </thead>

                <tbody>  

                  {  

                    data.map((item, idx) => {  

                      return <tr style={{background:"white"}}  >  

                        <td  >{item.CustomerId}</td>
                        <td>{item.FirstName}</td> 
                       <td> {item.LastName}</td> 
                     
                        <td>  {item.Username}</td>
                        <td>  {item.AccountNo}</td>
                  
                      

                        

                      </tr>  

                    })}  

                </tbody>  

              </Table>  
</div>
          
     
        </Col>  

      </Row>  
      </div>
      
    </div>  

  )  

}  
