import React from 'react'  
//import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';  
import axios from 'axios';  
import { useState, useEffect } from 'react'  
import '../style.css';
export default function CustomerMini(props) {  
  const [data, setData] = useState([]);  

  useEffect(() => {  

    const GetData = async () => {  
      const result = await axios('https://localhost:44387/Api/Customer/minitransactions?username=' + localStorage.getItem("token"));  
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
              
                    <th scope="col">TransId</th>  

                    <th scope="col">DateandTime(IST)</th>  

                    <th scope="col">Remarks</th>  

                    <th scope="col">Debt(INR)</th>  
                    <th scope="col">Credit(INR)</th>  
                    <th scope="col">Balance(INR)</th>  
                   
                </tr>  

            </thead>  

            <tbody>  

                {  
 data.map((item, idx) => {  

    return <tr className="table-active" style={{background:"white"}} >  

      <td  >{item.TransactionId}</td>
      <td>{item.DateAndTime}</td> 
     <td> {item.Remarks}</td> 
    
      <td>  {item.Debt}</td>
      <td>  {item.Credit}</td>
      <td>  {item.Balance}</td>
    

      

    </tr>  

  })}  


            </tbody>  

        </table>  



    </div>  

)  

}  

 