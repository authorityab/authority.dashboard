using System;
using System.Threading.Tasks;

namespace Authority.Dashboard.Contracts
{
    public interface IModuleClient
    {
        Task Update(Guid moduleId, string value);
    }
}
