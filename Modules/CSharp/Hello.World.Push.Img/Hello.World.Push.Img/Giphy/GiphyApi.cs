namespace Hello.World.Push.Img.Giphy
{
    using System;
    using Hello.World.Push.Img.Giphy.Models;
    using Newtonsoft.Json;
    using System.Linq;
    using System.Net.Http;
    using System.Threading.Tasks;
    using System.Web;

    public class GiphyApi
    {
        private HttpClient _client;
        private string _apiKey;

        public GiphyApi()
        {
            _client = new HttpClient { BaseAddress = new Uri("http://api.giphy.com/v1/gifs/") };
            _apiKey = "lPOTyab0KsIIWTVrgp7c2fqpZujzNPNx";
        }

        public async Task<string> GetRandomImageAsync(string query)
        {
            
            var queryString = HttpUtility.ParseQueryString($"q={query}&api_key={_apiKey}");
            var uri = "search?" + queryString;

            var response = await _client.GetAsync(uri);
            if (response.IsSuccessStatusCode)
            {
                var value = await response.Content.ReadAsStringAsync();

                var giphyResponse = JsonConvert.DeserializeObject<GiphyResponse>(value);
                var count = giphyResponse.Data.Count();

                if (count == 0)
                {
                    return null;
                }
                var random = new Random();
                var index = count == 1 ? 0 : random.Next(0, count-1);

                Data item = giphyResponse.Data.ElementAt(index);
                return item.images.original.url;
            }

            return null;
        }
    }
}
