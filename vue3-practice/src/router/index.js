// import Home from '@/components/Home.vue';
// import ParentCounter from '@/components/ParentCounter.vue';
// import StyleComponent from '@/components/StyleComponent.vue';
// import Table from '@/components/Table.vue';
import HomeView from '@/views/Phase 3/HomeView.vue';
import { createRouter, createWebHistory } from 'vue-router'
import sourceData from '@/data.json'

const routes = [
    // Phase 3
    {
        path: '/', name: 'Home', component: HomeView
    },
    {
        path: '/destination/:id/:slug', 
        name: 'Destination', 
        component: () => import('@/views/Phase 3/DestinationShow.vue'),
        props: route => ({ ...route.params, id: parseInt(route.params.id) }),
        beforeEnter(to, from) {
            console.log("To: ", to)
            console.log("From: ", from)
            const ifExist = sourceData.destinations.find((destination) => destination.id === parseInt(to.params.id))
            console.log("Check if exists: ", ifExist)

            if(!ifExist) {
                return { name: 'NotFound' }
            }
        },
        children: [
            {
                path: ':experienceSlug', 
                name: 'Experience', 
                component: () => import('@/views/Phase 3/ExperienceShow.vue'),
                props: route => ({ ...route.params, id: parseInt(route.params.id) })
            },
        ]
    },

    // Route for not found page
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/Phase 3/NotFound.vue')
    }


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