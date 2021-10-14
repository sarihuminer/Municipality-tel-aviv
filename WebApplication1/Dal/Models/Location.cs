using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Dal.Models
{
    public class Location
    {
        public int timestamp { get; set; }
        public float latitude { get; set; }
        public float longitude { get; set; }
    }
}