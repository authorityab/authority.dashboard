using Authority.Dashboard.Contracts;
using Authority.Dashboard.Hubs;
using Authority.Dashboard.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Authority.Dashboard.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ModuleController : ControllerBase
    {
        private readonly IModuleService moduleService;
        private readonly IHubContext<ModuleHub> moduleHub;

        public ModuleController(IModuleService moduleService, IHubContext<ModuleHub> moduleHub) 
        {
            this.moduleService = moduleService;
            this.moduleHub = moduleHub;
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
        public ActionResult<string> Post([FromBody] string value)
        {
            return "value";

        }

        // PUT api/module/4A17AD48-0FD3-4F01-A063-D7ECCA8C91A7
        [HttpPut("{id:Guid}")]
        public async Task Put(Guid id, [FromBody] ModuleDto module)
        {
            await moduleHub.Clients.All.SendAsync("Update", module.Id, module.Value);
        }

        // DELETE api/module/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}