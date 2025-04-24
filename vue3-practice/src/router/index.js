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

        // Per-route Nav Guard
        beforeEnter(to, from) {
            console.log("To: ", to.path.split('/').splice(1))
            console.log("From: ", from)
            const ifExist = sourceData.destinations.find((destination) => destination.id === parseInt(to.params.id))
            console.log("Check if exists: ", ifExist)

            if(!ifExist) {
                return { 
                    name: 'NotFound',
                    // For keeping the url which is being tried to load
                    params: { pathMatch: to.path.split('/').splice(1) },
                    query: to.query,
                    hash: to.hash
                }
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
    },

    // For global navigation guard
    {
        path: '/protected',
        name: 'Protected',
        component: () => import('@/views/Phase 3/ProtectedView.vue'),
        meta:
        {
            requiresAuth: true
        }
    },

    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Phase 3/LoginPage.vue')
    },

    {
        path: '/invoices',
        name: 'Invoices',
        component: () => import('@/views/Phase 3/InvoicesView.vue'),
        meta: 
        {
            requiresAuth: true
        }
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

// Global Nav Guard
// router.beforeEach((to) => {
//     if(to.meta.requiresAuth && !window.user) {
//         // need to login first to access this route
//         const res = {
//             name: 'Login',
//             query: {redirect: to.fullPath}
//         }

//         console.log("Check res from global nav guard: ", res)
//         return res;
//     }
// })

const router = createRouter({
    history: createWebHistory(),
    routes
})

// Use Pinia for fake authenticate
router.beforeEach((to) => {
    if (to.meta.requiresAuth && !window.user) {
        // need to login first to access this route
        const res = {
            name: 'Login',
            query: { redirect: to.fullPath }
        }

        return res;
    }
})

export default router;