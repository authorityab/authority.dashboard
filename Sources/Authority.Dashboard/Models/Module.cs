using System;
namespace Authority.Dashboard.Models
{
    public class Module
    {
        public int Id { get; set; }

        public string Url { get; set; }

        public string Method { get; set; }

        public int ReloadInterval { get; set; }

        public string Color { get; set; }

        public decimal Width { get; set; }

        public decimal Height { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public int Order { get; set; }
    }
}

