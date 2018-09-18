using System.Collections.Generic;
using Authority.Dashboard.Contracts;
using Authority.Dashboard.Models;
using YamlDotNet.Serialization;
using YamlDotNet.Serialization.NamingConventions;

namespace Authority.Dashboard.Services
{
    using System;

    public class ModuleService : IModuleService
    {
        public List<Module> GetModules()
        {
            var conf = System.IO.File.OpenText("modules.yml");

            var deserializer = new DeserializerBuilder()
                .WithNamingConvention(new CamelCaseNamingConvention())
                .Build();

            try
            {
                var modules = deserializer.Deserialize<List<Module>>(conf);
                return modules;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }


        }
    }
}
