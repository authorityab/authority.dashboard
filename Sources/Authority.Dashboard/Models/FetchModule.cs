using System;
namespace Authority.Dashboard.Models
{
    public class FetchModule
    {
        public Guid Id { get; set; }

        public string Url { get; set; }

        public string Method { get; set; }

        public int ReloadInterval { get; set; }

        public string Color { get; set; }

        public int Width { get; set; }

        public int Height { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public int Order { get; set; }
    }
}

