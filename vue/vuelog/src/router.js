import { createWebHistory, createRouter } from "vue-router";
import Home from './components/Home.vue'
import List from './components/list.vue'
import Detail from './components/Detail.vue'
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/list",
    component:List,
  },
  {
    path: "/detail/:id",
    component:Detail,
    // children:[
    //   {
    //     path: "author",
    //     component: Author.vue,
    //   }
    // ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;