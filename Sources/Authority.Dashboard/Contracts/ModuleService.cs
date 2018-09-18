using System.Collections.Generic;
using Authority.Dashboard.Models;

namespace Authority.Dashboard.Contracts
{
    public interface IModuleService
    {
        List<Module> GetModules();
    }
}
