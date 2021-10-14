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
            string filePath = AppDomain.CurrentDomain.BaseDirectory.Replace("api\\", "BL\\locationData.json");

            // Read existing json data
            var jsonData = System.IO.File.ReadAllText(filePath);
            // De-serialize to object or create new list
            var locationsList = JsonConvert.DeserializeObject<List<Location>>(jsonData)
                                  ?? new List<Location>();

            // Add any new locations
            locationsList.AddRange(newLocations);

            // Update json data string
            jsonData = JsonConvert.SerializeObject(locationsList);
            File.WriteAllText(filePath, jsonData);

        }
    }
}
