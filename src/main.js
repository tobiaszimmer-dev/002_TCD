import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

const app = createApp(App);
const routes = [
  {
    path: "/",
    component: () => import("./pages/home.vue"),
  },
  {
    path: "/club",
    component: () => import("./pages/club.vue"),
  },
  {
    path: "/contact",
    component: () => import("./pages/contact.vue"),
  },
  {
    path: "/events",
    component: () => import("./pages/events.vue"),
  },
  {
    path: "/join-us",
    component: () => import("./pages/joinus.vue"),
  },
  {
    path: "/spieler",
    component: () => import("./pages/player.vue"),
  },
  {
    path: "/teams",
    component: () => import("./pages/teams.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);

app.mount("#app");