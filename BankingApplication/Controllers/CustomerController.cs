using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BankingApplication.Models;
namespace BankingApplication.Controllers
{
    [RoutePrefix("Api/Customer")]
    public class CustomerController : ApiController
    {
        BankProjectEntities db = new BankProjectEntities();
       // BankProjectEntities1 db1 = new BankProjectEntities1();
        BankProjectEntities3 db3 = new BankProjectEntities3();
        BankProjectEntities4 db4 = new BankProjectEntities4();
        
        [HttpGet]

        [Route("customer")]
        public object Getrecord(string username)
        {
            try
            {
                var emp = from c in db.Customers
                          where c.Username == username
                          select c;
                return emp;
            }
            catch(Exception ex)
            {
                return new Response
                {
                    Status = "Failed",
                    Message = "Data not saved"
                };
            }
        }


        [Route("transactions")]
        public object Gettransaction(string username)
        {
            try { 
            var emp = from c in db.Transactions
                      join d in db.Customers on c.AccountNo equals d.AccountNo
                      where username == d.Username

                      select c;
            return emp;
            }
            catch (Exception ex)
            {
                return new Response
                {
                    Status = "Failed",
                    Message = "Data not saved"
                };
            }
        }

        [Route("minitransactions")]
        public object Gettransaction2(string username)
        {
            try
            {
                var emp = from c in db.Transactions
                          join d in db.Customers on c.AccountNo equals d.AccountNo
                          where username == d.Username
                          orderby c.DateAndTime descending
                          select c;
                return emp.Take(10);
            }
            catch (Exception ex)
            {
                return new Response
                {
                    Status = "Failed",
                    Message = "Data not saved"
                };
            }
        }

        [HttpPost]
        [Route("addtransactions")]
        public object Createtransaction(TransactionInter t)

        {
            int flag = 0;
            int amount = 0;
            try
            {

                Transaction t1 = new Transaction();
                foreach(var i in db.Customers)
                {
                    if(i.Username==t.Username && i.Pin == t.PIN)
                    {
                        amount = i.OpeningBalance;
                       
                            t1.AccountNo = i.AccountNo;
                            flag = 1;
                            break;

                        
                    }
                }

                if(t.Amount>amount && t.Type == "Debt" && flag==1)
                {
                    return new Response
                    {
                        Status = "Transaction Failed",
                        Message = "Data not saved"
                    };
                }
               else if (flag == 1)
                {
                    if (t.Type == "Debt" )
                    {
                        t1.Remarks = "Self";
                        t1.Debt = t.Amount;
                        t1.Credit = 0;
                    }
                    else
                    {
                       
                            t1.Remarks = "Self";
                            t1.Credit = t.Amount;
                            t1.Debt = 0;
                        

                        
                    }
                    
                   
                    t1.DateAndTime = DateTime.Now;
                    t1.Balance = 10;
                    db.Transactions.Add(t1);
                    db.SaveChanges();
                    return new Response
                    {
                        Status = "Success",
                        Message = "Data Successfully"
                    };
                }
                else
                {
                    return new Response
                    {
                        Status = "Transaction Failed",
                        Message = "Data not saved"
                    };
                }
                
               

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

    

        [HttpPost]
        [Route("addben")]
        public object Createbenediciaries(BenInter b)

        {
            int flag = 0;
            try
            {

                Transaction t1 = new Transaction();
                foreach (var i in db.Customers)
                {
                    if (i.Username == b.Username && i.Pin == b.PIN && b.Amount<=i.OpeningBalance)
                    {
                        t1.AccountNo = i.AccountNo;
                        flag = 1;
                        break;
                    }
                }
                if (flag == 1)
                {


                    t1.Remarks = "Send to " + b.FirstName + " " + b.LastName + " with Account No" + b.AccountNo;
                    t1.Debt = b.Amount;
                    t1.Credit = 0;
                    t1.DateAndTime = DateTime.Now;
                    t1.Balance = 10;
                    db.Transactions.Add(t1);
                    db.SaveChanges();
                    return new Response
                    {
                        Status = "Success",
                        Message = "Data Successfully"
                    };
                }
                else
                {
                    return new Response
                    {
                        Status = "UnSuccess",
                        Message = "Data not saved"
                    };
                }



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
        

        [Route("customerhome")]
        public object Getdetails(string username)
        {
            try
            {
                var model = db.Customers.Find(username);
                var emp = from c in db.Customers
                          where c.Username == username
                          select new { c.FirstName, c.LastName, c.AadharNo, c.OpeningBalance };


                int ano = 0, bal = 0;
                string f = "", l = "";
                foreach (var c in db.Customers)
                {
                    if (c.Username == username)
                    {
                        ano = c.AccountNo;
                        bal = c.OpeningBalance;
                        f = c.FirstName;
                        l = c.LastName;
                    }
                }
                var emp1 = from b in db.Transactions
                           where b.AccountNo == ano
                           select b;
                int count = emp1.Count();
                var emp2 = db.Transactions.Where(i => i.AccountNo == ano).OrderByDescending(i => i.TransactionId).FirstOrDefault();
                string remarks1 = emp2.Remarks;
                string datetime1 = emp2.DateAndTime.ToString();
                var emp4 = new { First = ano, Second = bal, Third = count, Fourth = remarks1, Fifth = datetime1, name1 = f, name2 = l };
                return emp4;
            }
            catch (Exception ex)
            {
                return new Response
                {
                    Status = "Failed",
                    Message = "Data not saved"
                };
            }
        }

        [HttpPost]
        [Route("changepassword")]

        public object Passchange(Passwordsettingscs p)
        {
            try
            {
                Customer c = db.Customers.Where(i => i.Username == p.Username).FirstOrDefault();
                if (c.Password == p.OldPassword)
                {
                    c.Password = p.NewPassword;
                    db.SaveChanges();
                    return new Response
                    {
                        Status = "Success",
                        Message = "saved"
                    };
                }
                else
                {
                    return new Response
                    {
                        Status = "no no",
                        Message = "saved"
                    };
                }
            }
            catch(Exception e)
            {
                return new Response
                {
                    Status = "Not Success",
                    Message = "saved"
                };
            }
        }


        [Route("RequestChangeAM")]
        [HttpPost]
        public object CreateAM(ChangeAM model)

        {
            try
            {
                ChangeAM m = new ChangeAM() { Username = model.Username, DateAndTime = DateTime.Now, Status = "Pending", Address = model.Address, MobileNo = model.MobileNo };
                db4.ChangeAMs.Add(m);
                db4.SaveChanges();
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

        [Route("RequestCheque")]
        [HttpPost]
        public object ChequeBookRequest(string username)

        {
            try
            {
                RequestChequeBook r = new RequestChequeBook() { Username =username, DateAndTime = DateTime.Now, Status = "Success" };
                db3.RequestChequeBooks.Add(r);
                db3.SaveChanges();
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

        [Route("getchangeam")]
        
        public object GetCheque(string username)
        {
            try
            {
                var emp = from c in db4.ChangeAMs
                          where c.Username == username
                          select c;
                return emp.ToList();
            }
            catch (Exception ex)
            {
                return new Response
                {
                    Status = "Failed",
                    Message = "Data not saved"
                };
            }
        }

        //[Route("changing")]
        //[HttpPost]
        //public object PostCheque(string username)
        //{
        //    RequestChequeBook c = new RequestChequeBook() { DateAndTime = DateTime.Now, Status = "Success", Username = username };
        //    db3.RequestChequeBooks.Add(c);
        //    db3.SaveChanges();
        //    return new Response

        //    {
        //        Status = "fd",

        //        Message = "fd"

        //    };
        //}

    }
}
