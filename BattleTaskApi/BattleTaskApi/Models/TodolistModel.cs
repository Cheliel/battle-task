namespace BattleTaskApi.Models
{
    public class TodolistModel
    {
        public string Id { get; set; }
        public DateTime DateCreation { get; set; }
        public DateTime Echeance { get; set; }
        public string Titre { get; set; }
        public bool EstNotifier { get; set; } 
    }
}
