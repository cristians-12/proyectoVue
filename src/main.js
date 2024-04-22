import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Home from "./pages/home.vue";
import { createRouter, createWebHistory } from "vue-router";
import Thanks from "./pages/thanks.vue";


const routes = [
    {path:'/', component: Home},
    {path:'/thanks', component: Thanks}
]
const router = createRouter({
    history:createWebHistory(),
    routes
})

createApp(App).use(router).mount("#app");
