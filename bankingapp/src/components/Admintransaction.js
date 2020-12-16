import React, { Component } from 'react'  

import './style3.css';
import axios from "axios";  

import DatePicker from "react-datepicker";    

import "react-datepicker/dist/react-datepicker.css";    

export class Admintransaction  extends Component {  

    constructor(props) {  

        super(props)  

  

        this.state = {  

            employeedata: [],  

            startdate: '' ,  

            enddate:''   

        }  

    }  

    Changedate = (e) => {    

        this.setState({    

                startdate: e    

        });    

};  

enddate = (e) => {    

    this.setState({    

        enddate: e    

    });    

};  

    componentDidMount() {  
    
        axios.get('https://localhost:44387/Api/Admin/showdata').then(response => {  

            console.log(response.data);  

            this.setState({  

                employeedata: response.data  

            });  

        });  

    }  

    onsubmit = (e) => {    

       if(this.state.startdate && this.state.enddate){

        const data = { startdate:this.state.startdate, enddate:this.state.enddate};    

        e.preventDefault();    

        axios.post('https://localhost:44387/Api/Admin/search',data).then(response => {  

            console.log(response.data);  

            this.setState({  

                employeedata: response.data  

            });  

        });  
    }
    else{
        axios.get('https://localhost:44387/Api/Admin/showdata').then(response => {  

            console.log(response.data);  

            this.setState({  

                employeedata: response.data  

            });  

        });  
    }

}     

    render() {  

        return (  

            <div className="Display">  

           <br></br>

                <form onSubmit={this.onsubmit}>  

                    <div className="row hdr" >  

                        <div className="col-sm-3 form-group">  </div>  

                        <div className="col-sm-3 form-group">  
                        <label>From date:</label>&nbsp;&nbsp; 
                                <DatePicker className="form-control"    

                                                        selected={this.state.startdate} placeholderText="Select Date" showPopperArrow={false}    

                                                        onChange={this.Changedate}    

                                                />    

                        </div>  

                        <div className="col-sm-3 form-group">  
<label>To date:</label>&nbsp;&nbsp; 
                                 <DatePicker className="form-control"    

                                                        selected={this.state.enddate} placeholderText="Select Date" showPopperArrow={false}    

                                                        onChange={this.enddate}    

                                                />    

                        </div>  

                        <div className="col-sm-2 form-group">  

                            <button type="submit" className="btn btn-success" >Search</button>  

                        </div>  

                    </div>  

                </form>  

                <table className="table table-striped table-hover">  

                    <thead className="thead-dark">  

                        <tr>  
                      
                            <th scope="col">TransId</th>  

                            <th scope="col">DateandTime(IST)</th>  

                            <th scope="col">Remarks</th>  

                            <th scope="col">Debt(INR)</th>  
                            <th scope="col">Credit(INR)</th>  
                            <th scope="col">Balance(INR)</th>  
                            <th scope="col">Account No</th> 
                        </tr>  

                    </thead>  

                    <tbody>  

                        {  

                    this.state.employeedata.map((p, index) => {  

                      return  <tr style={{background:"white"}}  key={index}>  

                            <th>{p.TransactionId}</th>  

                           

                         

                    <td>{p.DateAndTime}</td>  
                    <td>{p.Remarks}</td>  
                    <td>{p.Debt}</td>  
                    <td>{p.Credit}</td>  
                    <td>{p.Balance}</td>  
                    <td>{p.AccountNo}</td>  

                        </tr>  

                    })   

                    }  

                    </tbody>  

                </table>  

                </div>

    

        )  

    }  

}  

  

export default Admintransaction 