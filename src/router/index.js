import {createRouter, createWebHistory} from "vue-router";


const routes=[
    {path:'/', name:'todoList', component: () => import('../views/todoList.vue')},

]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router