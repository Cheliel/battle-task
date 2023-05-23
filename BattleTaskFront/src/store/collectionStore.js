import { defineStore } from 'pinia'

export const useCollectionStore = defineStore('collectionStore', {
  state: () => ({
    Collections: [{ id: 3940, name: 'Tâche menagère', color: '#F1414E', isNotified: true },
      { id: 3900, name: 'Tâche menagère1', color: '#F1414E', isNotified: true },
      { id: 3440, name: 'Tâche menagère2', color: '#F1414E', isNotified: true }]
  }),
  getters: {
    getCollections: (state) => state.Collections,

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
    }
  }
})
