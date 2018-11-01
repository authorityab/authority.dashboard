using System;
namespace Authority.Dashboard.Models
{
    public class Module
    {
        public Guid Id { get; set; }

        public string Source { get; set; }

        public string Type { get; set; }


        public string Url { get; set; }

        public string Method { get; set; }

        public int ReloadInterval { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public int Order { get; set; }

        public Style Style { get; set; }
    }
}