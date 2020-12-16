using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BankingApplication.Models
{
    public class TransactionInter
    {
        public string Username { get; set; }
        public int Amount { get; set; }

        public int PIN { get; set; }
       
        public string Type { get; set; }
    }
}