using Dal.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
   public class LocationBL
    {
        public static void SaveNewRecord(List<Location> newLocations)
        {
            string json = JsonConvert.SerializeObject(newLocations);
            string CurrentDirectory = AppDomain.CurrentDomain.BaseDirectory.Replace("api\\", "BL\\locationData.json");

            File.WriteAllText(CurrentDirectory, json);
        }
    }
}
