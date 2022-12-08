import { createWebHistory, createRouter } from "vue-router";
import MainComp from './pages/MainComp.vue'
import AllCourses from './pages/AllCourses.vue'

const routes = [
  {
    path: "/",
    name: "MainComp",
    component: MainComp,
  },
  {
    path: "/courses",
    name: "AllCourses",
    component: AllCourses,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;