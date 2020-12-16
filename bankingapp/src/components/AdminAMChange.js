import React from 'react'  
import { Col, Row, Table } from 'reactstrap';  
import axios from 'axios';  
import { useState, useEffect } from 'react'  
import './style2.css';
export default function AdminAMChange(props) {  

  const [data, setData] = useState([]);  
 

  useEffect(() => {  
   
    const GetData = async () => {  
      const result = await axios('https://localhost:44387/Api/Admin/ChangeAPRecord1');  
      setData(result.data);  
    };  

    GetData();  
 }, []); 

 const AcceptRequest = (username1,Address1,MobileNo1,DateAndTime1) => {  
   alert(username1+Address1+MobileNo1+DateAndTime1);
  
   fetch('https://localhost:44387/Api/Admin/Success', {
        
                    method: 'put',
     
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
      
                    body: JSON.stringify({
 
                        Username:username1,
                        Address: Address1,
                        MobileNo: MobileNo1,
                        DateAndTime: DateAndTime1,
                        Status:'Accept'
    
                    })
     
                }).then((Response) => Response.json())
      
                    .then((result) => {
       
                        console.log(result.Status);
     
                       
  
                        window.location.reload(); 
    
                       
                       
                           
                    })
     
            }
            const DeclineRequest = (username1,Address1,MobileNo1,DateAndTime1) => {  
                alert(username1+Address1+MobileNo1+DateAndTime1);
               
                fetch('https://localhost:44387/Api/Admin/Success', {
                     
                                 method: 'put',
                  
                                 headers: {
                                     'Accept': 'application/json',
                                     'Content-Type': 'application/json'
                                 },
                   
                                 body: JSON.stringify({
              
                                     Username:username1,
                                     Address: Address1,
                                     MobileNo: MobileNo1,
                                     DateAndTime:'',
                                     Status:'Decline'
                 
                                 })
                  
                             }).then((Response) => Response.json())
                   
                                 .then((result) => {
                    
                                     console.log(result);
                  
                                    
               
                                       
                                     window.location.reload(); 
                                    
                                    
                                        
                                 })
                  
                         }

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
                       <th>Address</th>
                       <th>Phone</th>
                       <th>Date-Time(IST)</th>
                       <th>Status</th>
                    <th></th>
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
                      
                       <td> <button onClick={() => { AcceptRequest(item.Username,item.Address,item.MobileNo,item.DateAndTime) }} className="btn btn-success mb-1" block><span>Accept</span></button>  </td>
                       <td> <button onClick={() => { DeclineRequest(item.Username,item.Address,item.MobileNo,item.DateAndTime) }}  className="btn btn-danger mb-1" block><span>Reject</span></button>  </td>
                      

                        

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
