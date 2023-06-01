import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/Home.vue'
import Services from '../pages/Services.vue'
import Form from '../pages/Form.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/services',
        component: Services
    },
    {
        path: '/services/form',
        component: Form
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router