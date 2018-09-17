using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Authority.Dashboard.Models;
using Microsoft.AspNetCore.Mvc;
using YamlDotNet.RepresentationModel;
using YamlDotNet.Serialization;
using YamlDotNet.Serialization.NamingConventions;

namespace Authority.Dashboard.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ModulesController : ControllerBase
    {
        // GET api/modules
        [HttpGet]
        public ActionResult<IEnumerable<Module>> Get()
        {
            var conf = System.IO.File.OpenText("modules.yml");
         
            var deserializer = new DeserializerBuilder()
                .WithNamingConvention(new CamelCaseNamingConvention())
                .Build();

            var modules = deserializer.Deserialize<List<Module>>(conf);

            return modules;
        }

        // GET api/modules/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {


            return "value";
        }

        // POST api/modules
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/modules/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/modules/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
