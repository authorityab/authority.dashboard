using System;
using System.Threading.Tasks;
using Authority.Dashboard.Contracts;
using Microsoft.AspNetCore.SignalR;

namespace Authority.Dashboard.Hubs
{
    public class ModuleHub : Hub<IModuleClient>
    {
        public async Task Update(Guid moduleId, string value) => await Clients.All.Update(moduleId, value);
    }
}
