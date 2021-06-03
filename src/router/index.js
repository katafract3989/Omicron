import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    mode: "history",
    name: "Home",
    component: Home,
  },
  {
    path: "/detail/:id",
    mode: "history",
    name: "About",
    props: true,
    component: () => import("../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
