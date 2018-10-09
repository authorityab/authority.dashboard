using Authority.Dashboard.Contracts;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Threading.Tasks;

namespace Authority.Dashboard.Hubs
{
    public class ModuleHub : Hub<IModuleClient>
    {
        public async Task Update(Guid moduleId, string value) => await Clients.All.Update(moduleId, value);
    }
}