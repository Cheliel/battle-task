import { defineStore } from "pinia";

export const useNoteStore = defineStore("noteStore", {
  state: () => ({
    Notes: [
      {
        id: 3940,
        name: "Tâche menagère",
        description: "",
        color: "#F1414E",
        isNotified: true,
      },
      {
        id: 3900,
        name: "Tâche menagère1",
        description: "",
        color: "#F1414E",
        isNotified: true,
      },
      {
        id: 3440,
        name: "Tâche menagère2",
        description: "",
        color: "#F1414E",
        isNotified: true,
      },
    ],
  }),
  getters: {
    getNotes: (state) => state.Notes,

    getNoteData: (state) => {
      console.log(state.Notes);
      return (noteID) => state.Notes.find((note) => note.id === noteID);
    },
  },
  actions: {
    deleteNote(noteID) {
      this.Notes = this.Notes.filter((note) => note.id !== noteID);
    },
  },
});
