import {createRouter, createWebHistory} from "vue-router";


const routes=[
    {path:'/', name: 'todoList', component: () => import('../views/todoList.vue')},
    {path:'/todoEdit', name: 'todoEdit', component: () => import('../views/todoEdit.vue')},
    {path:'/todoDetail/:id/:description/:complete/:date', name: 'todoDetail', component: () => import('../views/todoDetail.vue')},
    { path: '/incomplete', name: 'Incomplete', component:() => import('../views/todoIncomplete.vue')},
    { path: '/complete', name: 'Complete', component: () => import('../views/todoComplete.vue') },
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router