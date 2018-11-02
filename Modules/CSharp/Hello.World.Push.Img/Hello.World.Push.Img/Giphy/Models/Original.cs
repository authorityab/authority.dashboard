namespace Hello.World.Push.Img.Giphy.Models
{
    using Hello.World.Push.Img.Giphy.Models.Base;

    public class Original : ImageProperties
    {
        public string frames { get; set; }
        public string mp4 { get; set; }
        public string mp4_size { get; set; }
        public string webp { get; set; }
        public string webp_size { get; set; }
        public string hash { get; set; }
    }
}
