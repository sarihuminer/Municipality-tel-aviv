
using Microsoft.AspNetCore.Cors;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Http.Cors;
using System.Web.Http;

namespace WebApplication1.Controllers
{
    [System.Web.Http.Cors.EnableCors(origins: "*", headers: "*", methods: "*")]
    [System.Web.Http.RoutePrefix("api/Location")]
    public class LocationController : Controller
    {
        [System.Web.Http.HttpPost]
        public IHttpActionResult Index()
        {
           
        }
    }
}