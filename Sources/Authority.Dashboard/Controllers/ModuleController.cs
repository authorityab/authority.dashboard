using System.Collections.Generic;
using Authority.Dashboard.Contracts;
using Authority.Dashboard.Models;
using Microsoft.AspNetCore.Mvc;

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
        public ActionResult<IEnumerable<Module>> Get()
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
        public void Post([FromBody] string value)
        {
        }

        // PUT api/module/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/module5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
