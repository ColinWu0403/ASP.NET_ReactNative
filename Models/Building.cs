namespace SimpleWebAppReact.Models
{
    public class Building
    {
        public Building(string name, string address)
        {
            Name = name;
            Address = address;
        }

        public string Name { get; set; }
        public string Address { get; set; }
        // Add other properties as needed
    }
}