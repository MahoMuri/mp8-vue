import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/About.vue"),
  },
  {
    path: "/coffee",
    name: "Coffee",
    component: () => import("../views/Coffee.vue"),
  },
  {
    path: "/tea",
    name: "Tea",
    component: () => import("../views/Tea.vue"),
  },
  {
    path: "/shake",
    name: "Shake",
    component: () => import("../views/Shake.vue"),
  },
  {
    path: "/order",
    name: "Order",
    component: () => import("../views/Order.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
