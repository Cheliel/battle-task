import { defineStore } from "pinia";
import axios from "axios";

export const useToDoListStore = defineStore("toDoListsStore", {
  state: () => ({
    toDoLists: [],
  }),
  getters: {
    getToDoLists: (state) => state.toDoLists,

    getToDoListData: (state) => {
      console.log(state.toDoLists);
      return (toDoListID) =>
        state.toDoLists.find((toDoList) => toDoList.id === toDoListID);
    },
  },
  actions: {
    async fetchToDoList() {
      const config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "http://127.0.0.1:5000/GetToDoList",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJJZCI6ImI3MTkyNmIyLTc4MmEtNDQyNi1iNzdmLTBiZDc4N2I2ZDEwYSIsImp0aSI6IjI2N2E2YWQyLTEzZmYtNDZlMS1hZjRmLTg2Y2ZhZmE2YTg3MyIsIm5iZiI6MTY4NTIxMjM2MCwiZXhwIjoxNzQ1MjEyMzAwLCJpYXQiOjE2ODUyMTIzNjAsImlzcyI6Im1vaGFtYWRsYXdhbmQuY29tIiwiYXVkIjoibW9oYW1hZGxhd2FuZC5jb20ifQ.b3OLly0sWi4DVEACoOFsi9EFUdDbXl78kxtyvy4Aagon1UvE_TRyO3wgof8AUS5fECWjU9wIeABsKdg3i4wYkg",
        },
      };
      const todoList = await axios
        .request(config)
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          console.log(error);
        });

      this.toDoLists = todoList;
    },
    deleteToDoList(toDoListID) {
      this.toDoLists = this.toDoLists.filter(
        (toDoList) => toDoList.id !== toDoListID
      );
    },
  },
});
