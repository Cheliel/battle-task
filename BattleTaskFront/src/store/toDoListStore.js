import { defineStore } from 'pinia'

export const useToDoListStore = defineStore('toDoListsStore', {
  state: () => ({
    toDoLists: [{ id: 3940, name: 'Tâche menagère', description: '', color: '#F1414E', isNotified: true },
      { id: 3900, name: 'Tâche menagère1', description: '', color: '#F1414E', isNotified: true },
      { id: 3440, name: 'Tâche menagère2', description: '', color: '#F1414E', isNotified: true }]
  }),
  getters: {
    getToDoLists: (state) => state.toDoLists,

    getToDoListData: (state) => {
      console.log(state.toDoLists)
      return (toDoListID) => state.toDoLists.find((toDoList) => toDoList.id === toDoListID)
    }
  },
  actions: {
    deleteToDoList (toDoListID) {
      this.toDoLists = this.toDoLists.filter((toDoList) => toDoList.id !== toDoListID)
    }
  }
})