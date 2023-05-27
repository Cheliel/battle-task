import { defineStore } from "pinia";

export const useNoteStore = defineStore("userStore", {
  state: () => ({
    user: { id: 0, pseudo: "john", email: "john.doe@gmail.com", token: "" },
  }),
  getters: {
    getUserData: (state) => state.user,

    getNoteData: (state) => {
      console.log(state.toDoLists);
      return (toDoListID) =>
        state.toDoLists.find((toDoList) => toDoList.id === toDoListID);
    },
  },
  actions: {
    disconnect(toDoListID) {
      this.user = {};
    },
    async connect(user) {},
  },
});
