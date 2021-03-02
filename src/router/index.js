import Vue from "vue";
import VueRouter from "vue-router";
import intro from "../views/intro.vue";
import Note from "../views/Note.vue";
import Vuespace from "../components/Vuespacecomponent.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "intro",
    component: intro
  },
  {
    path: "/Note",
    name: "Note",
    component: Note
  },
  {
    path: "/Demo",
    name: "Demo",
    component: () => import("../views/Demo.vue")
  },
  {
    path: "/vueworkspace",
    name: "vueworkspace",
    component: () => import("../components/VueWorkspace.vue")
  },
  {
    path: "/Vuespacecomponent",
    name: "Vuespacecomponent",
    component: Vuespace
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
