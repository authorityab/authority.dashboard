using Authority.Dashboard.Contracts;
using Authority.Dashboard.Models;
using YamlDotNet.Serialization;
using YamlDotNet.Serialization.NamingConventions;

namespace Authority.Dashboard.Services
{
    public class DashboardService : IDashboardService
    {
        public DashboardService()
        {
        }

        public DashboardSettings GetDashboardSettings()
        {
            var conf = System.IO.File.OpenText("dashboard.yml");

            var deserializer = new DeserializerBuilder()
                .WithNamingConvention(new CamelCaseNamingConvention())
                .Build();

            var settings = deserializer.Deserialize<DashboardSettings>(conf);

            return settings;
        }
    }
}