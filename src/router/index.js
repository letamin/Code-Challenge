import Vue from "vue";
import VueRouter from "vue-router";
import jwtDecode from "jwt-decode";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home/Home.vue"),
  },
  {
    path: "/done",
    name: "LoanDone",
    component: () => import("../views/Home/Done.vue"),
  },
  {
    path: "/repay",
    name: "LoanRepay",
    component: () => import("../views/Home/Repay.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login/Login.vue"),
    beforeEnter(to, from, next) {
      if (to.name == "Login") {
        if (localStorage.getItem("token")) {
          try {
            const decode = jwtDecode(localStorage.getItem("token"));
            if (decode.userType === "admin") {
              next("/admin");
            } else if (decode.userType === "client") {
              next("/");
            }
          } catch {
            localStorage.removeItem("token");
            next("/login");
          }
        } else {
          next();
        }
      }
    },
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../views/Admin/Admin.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
