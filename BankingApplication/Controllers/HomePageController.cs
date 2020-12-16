using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BankingApplication.Models;
namespace BankingApplication.Controllers
{
    [RoutePrefix("Api/login")]
    public class HomePageController : ApiController
    {
        BankProjectEntities db = new BankProjectEntities();

        [Route("Login")]

        [HttpPost]
        public Response HomeLogin(Login login)

        {

            var log = db.Admins.Where(x => x.Username.Equals(login.Username) && x.Password.Equals(login.Password)).FirstOrDefault();

            if (log == null)

            {
                var log1 = db.Customers.Where(x => x.Username.Equals(login.Username) && x.Password.Equals(login.Password)).FirstOrDefault();

                if (log1 == null) { return new Response { Status = "Invalid", Message = "Invalid User." }; }
                else { return new Response { Status = "Success", Message = "Valid User" }; }


            }

            else

                return new Response { Status = "Admin", Message = "Login Successfully" };

        }



        [Route("newsss")]

        [HttpGet]

        public object DisplayNews()

        {

            return db.News.ToList();



        }
    }
}

