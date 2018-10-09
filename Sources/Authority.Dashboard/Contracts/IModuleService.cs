using Authority.Dashboard.Models;
using System.Collections.Generic;

namespace Authority.Dashboard.Contracts
{
    public interface IModuleService
    {
        List<Module> GetModules();
    }
}
