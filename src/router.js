import Vue from "vue";
import Router from "vue-router";
import HomeView from "@/views/HomeView";
import AboutView from "@/views/AboutView";
import ErrorView from "@/views/ErrorView";
import CoinDetailView from "@/views/CoinDetailView";

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/coin/:id",
      name: "coin-detail",
      component: CoinDetailView,
    },
    {
      path: "*",
      name: "error",
      component: ErrorView,
    },
  ],
});
