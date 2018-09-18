using System;
using System.Collections.Generic;

namespace Authority.Dashboard.Models
{
    public class Modules
    {
        public List<FetchModule> FetchModules { get; set; }

        public List<PushModule> PushModules { get; set; }

    }
}
