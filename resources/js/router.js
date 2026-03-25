import {createRouter, createWebHistory} from 'vue-router'
import store from "./store/store"
import { sync } from 'vuex-router-sync'


import Index from './views/Index'
import LibraryCard from './views/LibraryCard'
import AdminPanel from './views/AdminPanel'

let routes = [
    {
        name: "Home",
        path: "/",
        component: Index,
    },
    {
        name: "LibraryCard",
        path: "/LibraryCard/",
        component: LibraryCard
    },
    {
        name: "AdminPanel",
        path: "/AdminPanel/",
        component: AdminPanel
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

sync(store, router)

export default router