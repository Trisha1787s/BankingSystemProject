import React from 'react'  
//import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';  
import axios from 'axios';  
import { useState, useEffect } from 'react'  
import '../style2.css';
//import DatePicker from "react-datepicker";    
import "react-datepicker/dist/react-datepicker.css";    
export default function CustomerTrackService(props) {  
  const [data, setData] = useState([]);  

  useEffect(() => {  

    const GetData = async () => {  
      const result = await axios('https://localhost:44387/Api/Customer/getchangeam?username=' + localStorage.getItem("token"));  
      setData(result.data);  
    };  

    GetData();  
 }, []);  







  return (  
    <div className="Display">  
 
    <br></br>
 
 
         <table className="table table-striped table-hover">  
 
             <thead className="thead-dark">  
 
                 <tr>  
               
                     <th scope="col">Address</th>  
 
                     <th scope="col">Mobile No</th>  
 
                     <th scope="col">Status</th>  
 
                    
                 </tr>  
 
             </thead>  
 
             <tbody>  
 
                 {  
  data.map((item, idx) => {  
 
     return <tr className="table-active" style={{background:"white"}} >  
 
       <td  >{item.Address}</td>
       <td>{item.MobileNo}</td> 
      <td> {item.Status}</td> 
     
     
 
     </tr>  
 
   })}  
 
 
             </tbody>  
 
         </table>  
 
 
 
     </div>  
 
 )  
 
 }  
 
  