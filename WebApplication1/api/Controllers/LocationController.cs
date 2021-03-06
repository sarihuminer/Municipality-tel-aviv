using Dal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace api.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/Location")]
    public class LocationController : ApiController
    {
        // POST: api/Location
        public bool Post([FromBody]List<Location> locations)
        {
            if (locations.Count() == 0)
                return false;
            BL.LocationBL.SaveNewRecord(locations);
            return true;
        }

       
    }
}
