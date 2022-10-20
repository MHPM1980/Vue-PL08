import {createRouter, createWebHistory} from "vue-router";


const routes=[
    {path:'/', name: 'todoList', component: () => import('../views/todoList.vue')},
    {path:'/todoEdit', name: 'todoEdit', component: () => import('../views/todoEdit.vue')},
    {path:'/todoDetail/:id/:descritpion/:complete/:date', name: 'todoDetail', component: () => import('../views/todoDetail.vue')},
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router