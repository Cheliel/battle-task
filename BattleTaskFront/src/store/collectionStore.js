import { defineStore } from 'pinia'

export const useCollectionStore = defineStore('collectionStore', {
  state: () => ({
    Collections: [{ id: 3940, name: 'Tâche menagère', color: '#F1414E', isNotified: true, toDoLists: [{ id: 19, name: 'hello', notes: { id: 89, name: 'mqslfk' } }] },
      { id: 3900, name: 'Tâche menagère1', color: '#F1414E', isNotified: true, toDoLists: [{ id: 8, name: 'hell1', notes: [{ id: 89, name: 'mqslfk' }] }] },
      { id: 3440, name: 'Tâche menagère2', color: '#F1414E', isNotified: true, toDoLists: [{ id: 7, name: 'hello2', notes: [{ id: 89, name: 'mqslfk' }] }] }]
  }),
  getters: {
    getCollections: (state) => state.Collections,

    getToDoLists: (state) => {
      return (collectionID) => state.Collections.find((collection) => collection.id === collectionID).toDoLists
    },
    getNotes: (state) => {
      return (collectionID, toDoListID) => {
        const toDoLists = state.Collections.find((collection) => collection.id === collectionID).toDoLists
        if (toDoLists.length) {
          const t = toDoLists.find((toDoList) => toDoList.id === toDoListID).notes
          return t
        }
        return { erro: 'bad request' }
      }
    },
    getCollectionData: (state) => {
      console.log(state.Collections)
      return (collectionID) => state.Collections.find((collection) => collection.id === collectionID)
    },
    deleteazerCollectionn: (state) => {
      return (collectionID) => state.Collections.filter((collection) => collection.id === collectionID)
    }
  },
  actions: {
    deleteCollection (collectionID) {
      this.Collections = this.Collections.filter((collection) => collection.id !== collectionID)
    },
    async fillCollection () {

    }

  }
})
