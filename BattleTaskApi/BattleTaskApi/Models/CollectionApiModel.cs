namespace BattleTaskApi.Models
{
    public class CollectionApiModel
    {
        public string Id { get; set; }
        public string Titre { get; set; }
        public string Color { get; set; }
        public bool IsNotif { get; set; }
        public int Facile { get; set; }
        public int Moyen { get; set; }
        public int Dificile { get; set; }
        public int TresDificile { get; set; }
        
    }
}
