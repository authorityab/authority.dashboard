using System;
namespace Authority.Dashboard.Models
{
    public class FetchModule
    {
        public Guid Id { get; set; }

        public string Url { get; set; }

        public string Method { get; set; }

        public int ReloadInterval { get; set; }

    }
}

