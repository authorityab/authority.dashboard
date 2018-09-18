using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using Authority.Dashboard.Contracts;
using Authority.Dashboard.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Authority.Dashboard.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ModuleController : ControllerBase
    {
        private readonly IModuleService moduleService;

        public ModuleController(IModuleService moduleService) 
        {
            this.moduleService = moduleService;
        }

        // GET api/module
        [HttpGet]
        public ActionResult<List<Module>> Get()
        {
            var modules = moduleService.GetModules();
            return modules;
        }

        // GET api/module/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/module
        [HttpPost]
        public async Task Post([FromBody] string value)
        {
            var module = JsonConvert.DeserializeObject<List<Module>>(value);
            HttpClient client = new HttpClient();

            HttpResponseMessage response = await client.PostAsJsonAsync(
                "api/update", module);

            response.EnsureSuccessStatusCode();
        }

        // PUT api/module/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/module/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
