import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import DashboardLayout from "./components/DashboardLayout.vue";
import HomePage from "./components/HomePage.vue";

import LoginPage from "./components/LoginPage.vue";
import CustomerTable from "./components/CustomerTable.vue";
import Setaccounts from "./views/Setaccounts.vue";
import Addcustomer from "./views/Addcustomer.vue";
import Project from "./components/Project.vue";
import Addproject from "./components/Addproject.vue";
import taskes from "./components/taskes.vue";
import Finance from "./components/Finance.vue";
import Accounting from "./components/Accounting.vue";
import Message from "./components/Message.vue";
import Reports from "./components/Reports.vue";
import ViewArchive from "./components/ViewArchive.vue"
import AccountSettings from "./components/Account Settings.vue";
import Members from "./components/Members.vue";
import "./style.css";

import Chart from "chart.js/auto";

const routes = [
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/",
    component: DashboardLayout,
    children: [
      {
        path: "",
        name: "home",
        component: HomePage,
      },
      {
        path: "/crm/clients",
        name: "crm-clients",
        component: CustomerTable,
      },
      {
        path: "/setaccounts",
        name: "setaccounts",
        component: Setaccounts,
      },
      {
        path: "/Project",
        name: "Project",
        component: Project,
      },


      {

path: "/Addproject",
        name: "Addproject",
        component: Project,

      },
{
      path: "/taskes",
        name: "taskes",
        component: taskes,

      },

{
      path: "/Finance",
        name: "Finance",
        component: Finance,

      },

{
      path: "/Accounting",
        name: "Accounting",
        component: Accounting,

      },
      {
      path: "/Message",
        name: "Message",
        component: Message,

      },
      {
      path: "/Reports",
        name: "Reports",
        component: Reports,

      },
      
 {
      path: "/ViewArchive",
        name: "ViewArchive",
        component: ViewArchive,

      },
      

 {
      path: "/AccountSettings",
        name: "AccountSettings",
        component: AccountSettings,

      },


 {
      path: "/Members",
        name: "Members",
        component: Members,

      },



      {
        path: "/HomePage",
        name: "HomePage",
        component: HomePage,
      },
      
      {
        path: "/Addcustomer",
        name: "Addcustomer",
        component: Addcustomer,
      },
      {
        path: "/Addproject",
        name: "Addproject",
        component: Addproject,
      },
      {
           path: "/CustomerTable",
        name: "CustomerTable",
        component: CustomerTable,

        
      }
      
    ],
  },
  {
    path: "/home",
    redirect: { name: "home" },
  },
  // {
  //   path: "/:pathMatch(.*)*",
  //   redirect: { name: "home" },
  // },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

const publicRoutes = ["login"];

// router.beforeEach((to, from, next) => {
//   const isAuthenticated = localStorage.getItem("auth") === "true";
//   const isPublic = to.name && publicRoutes.includes(to.name);

//   if (!isAuthenticated && !isPublic) {
//     return next({
//       name: "login",
//       query: { redirect: to.fullPath },
//     });
//   }

//   if (isAuthenticated && to.name === "login") {
//     return next({ name: "home" });
//   }

//   next();
// });

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router);
window.Chart = Chart;
app.mount("#app");

