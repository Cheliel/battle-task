namespace BattleTaskApi.Models
{
    public class CollectionToDoListModel
    {
        public string IdTodolist { get; set; }
        public string IdCollection { get; set; }
        public string NameCollection { get;set; }
        public string NameToDoList { get;set; }
        public int Facile { get; set; }
        public int Moyen { get; set; }
        public int Dificile { get; set; }
        public int TresDificile { get; set; }

    }
}
