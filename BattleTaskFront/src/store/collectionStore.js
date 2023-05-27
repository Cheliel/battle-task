import { defineStore } from "pinia";
import axios from "axios";

export const useCollectionStore = defineStore("collectionStore", {
  state: () => ({
    Collections: [],
  }),
  getters: {
    getCollections: (state) => state.Collections,

    getToDoLists: (state) => {
      return (collectionID) =>
        state.Collections.find((collection) => collection.id === collectionID)
          .toDoLists;
    },
    getNotes: (state) => {
      return (collectionID, toDoListID) => {
        const toDoLists = state.Collections.find(
          (collection) => collection.id === collectionID
        ).toDoLists;
        if (toDoLists.length) {
          const t = toDoLists.find(
            (toDoList) => toDoList.id === toDoListID
          ).notes;
          return t;
        }
        return { erro: "bad request" };
      };
    },
    getCollectionData: (state) => {
      console.log(state.Collections);
      return (collectionID) =>
        state.Collections.find((collection) => collection.id === collectionID);
    },
    deleteazerCollectionn: (state) => {
      return (collectionID) =>
        state.Collections.filter(
          (collection) => collection.id === collectionID
        );
    },
  },
  actions: {
    async fetchCollection() {
      const config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "http://127.0.0.1:5000/GetCollection",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJJZCI6ImI3MTkyNmIyLTc4MmEtNDQyNi1iNzdmLTBiZDc4N2I2ZDEwYSIsImp0aSI6IjI2N2E2YWQyLTEzZmYtNDZlMS1hZjRmLTg2Y2ZhZmE2YTg3MyIsIm5iZiI6MTY4NTIxMjM2MCwiZXhwIjoxNzQ1MjEyMzAwLCJpYXQiOjE2ODUyMTIzNjAsImlzcyI6Im1vaGFtYWRsYXdhbmQuY29tIiwiYXVkIjoibW9oYW1hZGxhd2FuZC5jb20ifQ.b3OLly0sWi4DVEACoOFsi9EFUdDbXl78kxtyvy4Aagon1UvE_TRyO3wgof8AUS5fECWjU9wIeABsKdg3i4wYkg",
        },
      };
      const collection = await axios
        .request(config)
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          console.log(error);
        });

      this.Collections = collection;
      console.log(this.Collections);
    },
    deleteCollection(collectionID) {
      this.Collections = this.Collections.filter(
        (collection) => collection.id !== collectionID
      );
    },
    async fillCollection() {},
  },
});
