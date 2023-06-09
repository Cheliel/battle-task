import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CollectionView from "../views/CollectionView.vue";
import ToDoListView from "../views/ToDoListView.vue";
import NoteView from "@/views/NoteView.vue";
import ConnexionView from "@/views/ConnexionView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/collection",
    name: "CollectionView",
    component: CollectionView,
  },
  {
    path: "/toDoList",
    name: "ToDoListView",
    component: ToDoListView,
  },
  {
    path: "/note",
    name: "noteView",
    component: NoteView,
  },
  {
    path: "/connexion",
    name: "connexion",
    component: ConnexionView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
