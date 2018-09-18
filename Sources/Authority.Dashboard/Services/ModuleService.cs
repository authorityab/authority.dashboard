using System.Collections.Generic;
using Authority.Dashboard.Contracts;
using Authority.Dashboard.Models;
using YamlDotNet.Serialization;
using YamlDotNet.Serialization.NamingConventions;

namespace Authority.Dashboard.Services
{
    public class ModuleService : IModuleService
    {
        public Modules GetModules()
        {
            var conf = System.IO.File.OpenText("modules.yml");

            var deserializer = new DeserializerBuilder()
                .WithNamingConvention(new CamelCaseNamingConvention())
                .Build();

            var modules = deserializer.Deserialize<Modules>(conf);

            return modules;

        }
    }
}
