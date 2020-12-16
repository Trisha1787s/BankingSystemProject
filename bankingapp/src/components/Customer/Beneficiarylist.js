import React from 'react'  
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';  
import axios from 'axios';  
import { useState, useEffect } from 'react'  
import '../style2.css';
export default function Transactionslist(props) {  
  const [data, setData] = useState([]);  

  useEffect(() => {  

    const GetData = async () => {  
      const result = await axios('https://localhost:44387/Api/Customer/getbenrecords?username=' + localStorage.getItem("token"));  
      setData(result.data);  
    };  

    GetData();  
 }, []);  

if(localStorage.getItem("count")==0){
    return(
<div className="Display5">
<button onClick={()=>{  props.history.push('/AddBeneficiary')  }}>Add</button>
    <p>Sent to Add/Delete Beneficiaries</p>
    <p>No Beneficiaries found:(</p>
</div>
    );
}
else{
  return (  


<div className="Display5">
    <div className="animated fadeIn">  
      <Row>  

        <Col>  

          {/* <Card>   */}

            {/* <CardHeader>  

              <i className="fa fa-align-justify"></i> Customer List 

              </CardHeader>   */}

            {/* <CardBody>   */}
            <div>
            <button onClick={()=>{  props.history.push('/AddBeneficiary')  }}>Add</button>
            </div>

              <Table hover bordered striped responsive size="sm" >  

               <thead className="btn-success">
                   <tr>
                       <th>Id</th>
                       <th>To:FirstName</th>
                       <th>To:LastName</th>
                       <th>To:AccountNo</th>
                       <th>To:Amount</th>
                      
                   </tr>
               </thead>

                <tbody>  

                  {  

                    data.map((item, idx) => {  

                      return <tr className="table-active"  >  

                        <td  >{item.BId}</td>
                        <td>{item.ToFirstName}</td> 
                       <td> {item.ToLastName}</td> 
                      
                        <td>  {item.ToAccountNo}</td>
                        <td>  {item.ToAmount}</td>
                        
                      

                        

                      </tr>  

                    })}  

                </tbody>  

              </Table>  

            {/* </CardBody>   */}

          {/* </Card>   */}

        </Col>  

      </Row>  

    </div>  
    </div>
  )  
                }
}  
