import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import JobsView from "./views/JobsView.vue";
import NotFound from "./views/NotFound.vue";
import JobView from "./views/JobView.vue";
import AddJob from "./views/AddJobView.vue";
import EditJobView from "./views/EditJobView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/jobs",
      name: "Jobs",
      component: JobsView,
    },
    {
      path: "/jobs/add",
      name: "AddJob",
      component: AddJob,
    },
    {
      path: "/jobs/edit/:id",
      name: "EditJob",
      component: EditJobView,
    },
    {
      path: "/jobs/:id",
      name: "Job",
      component: JobView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
    },
  ],
  // 👇 this fixes the scroll issue
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition; // when using back/forward buttons
    } else {
      return { top: 0 }; // always scroll to top on navigation
    }
  },
});

export default router;
