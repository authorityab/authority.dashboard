using System;
using System.Collections.Generic;
using Authority.Dashboard.Contracts;
using Authority.Dashboard.Models;
using YamlDotNet.Serialization;
using YamlDotNet.Serialization.NamingConventions;

namespace Authority.Dashboard.Services
{
    public class ModuleService : IModuleService
    {
        public ModuleService()
        {
        }

        public List<Module> GetModules()
        {
            var conf = System.IO.File.OpenText("modules.yml");

            var deserializer = new DeserializerBuilder()
                .WithNamingConvention(new CamelCaseNamingConvention())
                .Build();

            var modules = deserializer.Deserialize<List<Module>>(conf);

            return modules;

        }
    }
}
