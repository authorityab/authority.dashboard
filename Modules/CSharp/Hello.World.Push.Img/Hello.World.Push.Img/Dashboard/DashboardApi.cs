namespace Hello.World.Push.Img.Dashboard
{
    using Newtonsoft.Json;
    using System;
    using System.Net.Http;
    using System.Text;

    public class DashboardApi
    {
        private HttpClient _httpClient;
        private string _moduleId;

        public DashboardApi(string moduleId)
        {
            _moduleId = moduleId;
            _httpClient = new HttpClient()
            {
                BaseAddress = new Uri($"http://localhost:5000/api/module/")
            };
        }

        public void Put(string imageUrl)
        {
            var body = new
            {
                id = _moduleId,
                value = imageUrl
            };

            var httpRequestMessage = new HttpRequestMessage
            {
                Content = new StringContent(JsonConvert.SerializeObject(body), Encoding.UTF8, "application/json")
            };

            _httpClient.PutAsync(_moduleId, httpRequestMessage.Content);}
    }
}
