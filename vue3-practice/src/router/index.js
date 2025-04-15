// import Home from '@/components/Home.vue';
// import ParentCounter from '@/components/ParentCounter.vue';
// import StyleComponent from '@/components/StyleComponent.vue';
// import Table from '@/components/Table.vue';
import HomeView from '@/views/Phase 3/HomeView.vue';
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    // Phase 3
    {
        path: '/', name: 'Home', component: HomeView
    },
    // Removed as no need for static routes but just keeping for reference 
    // {
    //     path: '/brazil', name: 'Brazil', component: () => import(/* webpackChunkName: 'Brazil' */'../views/Phase 3/BrazilView.vue')
    // },
    // {
    //     path: '/jamaica', name: 'Jamaicadddddddd', component: () => import(/* webpackChunkName: 'Jamaica' */'../views/Phase 3/JamaicaView.vue')
    // },
    // {
    //     path: '/hawaii', name: 'Huawaii', component: () => import(/* webpackChunkName: 'Hawaii' */'../views/Phase 3/HuwaiiView.vue')
    // },
    // {
    //     path: '/panama', name: 'Panama Leaks', component: () => import(/* webpackChunkName: 'Panama' */'../views/Phase 3/PanamView.vue')
    // },
    {
        path: '/destination/:id/:slug', 
        name: 'Destination', 
        component: () => import('@/views/Phase 3/DestinationShow.vue'),
        props: route => ({ id: parseInt(route.params.id) })
    },


    // Phase 1 and Phase 2
    // {
    //     path: '/home/', name: 'Home', component: Home
    // },
    // {
    //     path: '/table', name: 'Table', component: Table
    // },
    // {
    //     path: '/styleComponent', name: 'StyleComponent', component: StyleComponent
    // },
    // {
    //     path: '/counter/:unique', name: 'ParentCounter', component: ParentCounter,
    // },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;