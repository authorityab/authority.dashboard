namespace Hello.World.Push.Img
{
    using Hello.World.Push.Img.Giphy;
    using System;
    using System.Net.Http;
    using System.Threading;
    using System.Threading.Tasks;
    using Hello.World.Push.Img.Dashboard;

    class Program
    {
        static void Main(string[] args)
        {
            while (true)
            {
                string randomImageUrl = GetRandomImage();
                var dashboardApi = new DashboardApi("c7041543-7497-47d4-a1af-3894568ea23a");
                dashboardApi.Put(randomImageUrl);
                Thread.Sleep(5000);
            }
        }

        private static string GetRandomImage()
        {
            string query = GetRandomQuery();
            var giphyApi = new GiphyApi();
            var randomImageAsync = giphyApi.GetRandomImageAsync(query);
            randomImageAsync.Wait();
            var result = randomImageAsync.Result;
            if (string.IsNullOrWhiteSpace(result))
            {
                return GetRandomImage();
            }
            return result;
        }

        private static string GetRandomQuery()
        {
            var data = new[] {"Fred", "Dimman", "Vasse", "Zunken", "Cissi", "Oscar", "Felicia"};
            var random = new Random();
            var next = random.Next(0, data.Length-1);
            return data[next];
        }
    }
}
