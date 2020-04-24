import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Vuespace from "../components/Vuespace.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/About.vue")
  },
  {
    path: "/vueworkspace",
    name: "vueworkspace",
    component: () => import("../components/VueWorkspace.vue")
  },
  {
    path: "/vuespace",
    name: "vuespace",
    component: Vuespace
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
