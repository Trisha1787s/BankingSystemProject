import React from 'react'  
import { Col, Row, Table } from 'reactstrap';  
import axios from 'axios';  
import { useState, useEffect } from 'react'  
 import './style2.css';
export default function AdminService(props) {  

  const [data, setData] = useState([]);  
  const [name,setname]=useState({Username:''});

  useEffect(() => {  
   
    const GetData = async () => {  
      const result = await axios('https://localhost:44387/Api/Admin/ChangeAPRecord');  
      setData(result.data);  
    };  

    GetData();  
 }, []); 



  return (  


<div className="Display" >
    <div className="animated fadeIn">  
      <Row>  

        <Col>  

<br></br>
<br></br>


              <Table className="table table-hover">  

               <thead className="thead-dark">
                   <tr>
                       <th>Username</th>
                       <th >Address</th>
                       <th>Phone</th>
                       <th>Date-Time(IST)</th>
                       <th>Status</th>
                      
                    <th></th>
                      
                   </tr>
               </thead>

                <tbody>  

                  {  

                    data.map((item, idx) => {  

                      return <tr style={{background:"white"}}  >  

                        <td  >{item.Username}</td>
                        <td  >{item.Address}</td>
                        <td  >{item.MobileNo}</td>
                        <td>{item.DateAndTime}</td> 
                       <td> {item.Status}</td> 
                      
                     
                      

                        

                      </tr>  

                    })}  

                </tbody>  

              </Table>  

        

        </Col>  

      </Row>  

    </div>  
    </div>
  )  

}  
