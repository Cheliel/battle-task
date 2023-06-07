namespace BattleTaskApi.Models
{
    public class NoteModel
    {
        public string Id { get; set; }
        public string Texte { get; set; }
        public string Lieu { get; set; }
        public DateTime DateCreate { get; set; }
        public DateTime Echeance { get; set; }
        public bool Checked { get; set; }
        public int Difficulte { get; set; }
        public DateTime Duree { get; set; }
        public bool estNotifie { get; set; }
        public string CollectionId { get; set; }
        public string TodolistId { get; set; }
    }
}
