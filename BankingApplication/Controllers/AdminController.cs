using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BankingApplication.Models;
namespace BankingApplication.Controllers
{
    [RoutePrefix("Api/Admin")]
    public class AdminController : ApiController
    {
        BankProjectEntities db = new BankProjectEntities();
        BankProjectEntities2 db2 = new BankProjectEntities2();
     
        BankProjectEntities3 db3 = new BankProjectEntities3();
        BankProjectEntities4 db4 = new BankProjectEntities4();
        [HttpGet]

        [Route("CustRecord")]
        public object Getrecord()
        {
            try
            {
                var emp = from c in db.Customers
                          select new { c.CustomerId, c.FirstName, c.LastName, c.Phone, c.Address, c.AccountNo, c.Username };
                return emp.ToList();
            }
            catch(Exception ex)
            {
                return new Response

                {
                    Status = "Error",

                    Message = ex.StackTrace

                };
            }
        }

        [HttpGet]
        [Route("ChequeRecord")]
        public object Getcheque()
        {try
            {
                var cheque = from c in db3.RequestChequeBooks
                             select c;
                return cheque.ToList();
            }
            catch (Exception ex)
            {
                return new Response

                {
                    Status = "Error",

                    Message = ex.StackTrace

                };
            }
        }

        [HttpPost]
        [Route("CustAdd")]
        public object CreateCust(Customer model)

        {
          


            try
            {
                 int amount = model.OpeningBalance;

               
                Transaction t = new Transaction() { DateAndTime = DateTime.Now, Remarks = "Opened an account", Credit = model.OpeningBalance, AccountNo = model.AccountNo, Balance = model.OpeningBalance };
                db.Transactions.Add(t);
                model.OpeningBalance = 0;
                db.Customers.Add(model);
                db.SaveChanges();


                foreach(var i in db.Customers)
                {
                    if (model.Username == i.Username)
                    {
                        i.OpeningBalance = amount;
                    }
                }
         
                db.SaveChanges();
              
                return new Response
                {
                    Status = "Success",
                    Message = "Data Successfully inserted"
                };



            }
            catch (Exception ex)
            {
                return new Response

                {
                    Status = "Error",

                    Message = ex.StackTrace

                };
            }
        }
        [HttpPost]
        [Route("EditCust")]
        public object EditCust(Customer model)

        {
            try
            {
                db.Entry(model).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
                return new Response
                {
                    Status = "Success",
                    Message = "Data Successfully"
                };
            }
            catch (Exception ex)
            {
                return new Response

                {
                    Status = "Error",

                    Message = ex.Message

                };
            }

        }





        [Route("employeedetails")]

        [HttpGet]

        public object employeedetailById(string username)

        {

            var obj = db.Customers.Where(x => x.Username == username).ToList().FirstOrDefault();

            return obj;

        }


        [Route("showdata")]    

        [HttpGet]    

        public object showdata()

       {
            try
            {
                var a = db.Transactions.ToList();

                return a;
            }
            catch (Exception ex)
            {
                return new Response

                {
                    Status = "Error",

                    Message = ex.StackTrace

                };
            }

        }    

    

        [Route("search")]    

        [HttpPost]    

        public object search(searchdata sd)

        {
            try
            {
                var a = db2.Usp_Empsearch(sd.startdate, sd.enddate);

                return a;
            }
            catch (Exception ex)
            {
                return new Response

                {
                    Status = "Error",

                    Message = ex.StackTrace

                };
            }

        }
        [Route("customersearch")]

        [HttpGet]
        public object search2(string username)

        {
            try
            {
                var a = from c in db.Customers
                        where c.Username == username
                        select new { c.CustomerId, c.FirstName, c.LastName, c.Phone, c.Address, c.AccountNo, c.Username };


                return a.ToList();
            }
            catch (Exception ex)
            {
                return new Response

                {
                    Status = "Error",

                    Message = ex.StackTrace

                };
            }
        }

       

      
    [HttpPost]
    [Route("DeleteUserDetails")]
    public object DeleteUserDelete(string username)
    {
            try
            {
                var model = db3.RequestChequeBooks.Where(i => i.Username == username).ToList().FirstOrDefault();
                db3.RequestChequeBooks.Remove(model);
                db3.SaveChanges();
                return new Response
                {
                    Status = "Success",
                    Message = "Data Successfully Deleted"
                };
            }
            catch (Exception ex)
            {
                return new Response

                {
                    Status = "Error",

                    Message = ex.StackTrace

                };
            }
        }

    [HttpGet]
        [Route("ChangeAPRecord")]
        public object Getaddressphone()
        {
            try
            {
                var a = from c in db4.ChangeAMs
                        where c.Status != "Pending"
                        select c;
                return a.ToList();
            }
            catch (Exception ex)
            {
                return new Response

                {
                    Status = "Error",

                    Message = ex.StackTrace

                };
            }
        }

        [HttpGet]
        [Route("ChangeAPRecord1")]
        public object Getaddressphone1()
        {
            try
            {
                var a = from c in db4.ChangeAMs
                        where c.Status == "Pending"
                        select c;
                return a.ToList();
            }
            catch (Exception ex)
            {
                return new Response

                {
                    Status = "Error",

                    Message = ex.StackTrace

                };
            }
        }
       

        [HttpPut]
        [Route("Success")]

        public object AMchange(ChangeAM model)

        {
            try
            {
                if (model.Status == "Decline")
                {
                    ChangeAM a = db4.ChangeAMs.Where(i => i.Username == model.Username).ToList().FirstOrDefault();
                    a.Status = "Decline";
                    db4.SaveChanges();
                }
                Customer c = db.Customers.Where(i => i.Username == model.Username).ToList().FirstOrDefault();
                if (model.Status == "Accept")
                {
                if(model.MobileNo!=null)
                    {
                        c.Phone = (long)model.MobileNo;
                    }
                    if (model.Address != null)
                    {
                        c.Address = model.Address;
                    }

                   
                    db.SaveChanges();
                    ChangeAM a = db4.ChangeAMs.Where(i => i.Username == model.Username).ToList().FirstOrDefault();
                    a.Status = model.Status;
                    db4.SaveChanges();
                }

                              

                return new Response
                {
                    Status = "Success",
                    Message = "Data Successfully Deleted"
                };

            }
               

                
            
            catch (Exception e)
            {
                return new Response
                {
                    Status = e.StackTrace,
                    Message = "Not deleted"
                };
            }
        }

    }
}
