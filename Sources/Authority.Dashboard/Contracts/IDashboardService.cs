using Authority.Dashboard.Models;

namespace Authority.Dashboard.Contracts
{
    public interface IDashboardService
    {
        DashboardSettings GetDashboardSettings();
    }
}