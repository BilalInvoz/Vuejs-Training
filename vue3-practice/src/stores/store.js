import { defineStore } from "pinia";

export const usePiniaStore = defineStore('piniaStore', {
    // state, actions and getters
    state: () => ({
        requiresAuth: true,
        username: '',
        password: ''
    }),

    actions: {
        login(route, router) {
            window.user = this.username
            const redirectPath = route.query.redirect || '/protected'
            console.log("Check redirect path: ", redirectPath)
            console.log("Check window user: ", window)
            router.push(redirectPath)
        },

        logOut(router) {
            window.user = null
            router.push({ name: 'Home' })
        },

        // fakeAuthenticateUser(router, to) {
        //     console.log("Router from index: ", router)
        //     // router.beforeEach((to) => {
        //         if (to.meta.requiresAuth && !window.user) {
        //             // need to login first to access this route
        //             const res = {
        //                 name: 'Login',
        //                 query: { redirect: to.fullPath }
        //             }

        //             console.log("Check res from global nav guard: ", res)
        //             return res;
        //         }
        //     // })
        // }
    },

    getters: {
        // fakeAuthenticateUser(router) {
        //     console.log("Router from index: ", router)
        //     router.beforeEach((to) => {
        //         if (to.meta.requiresAuth && !window.user) {
        //             // need to login first to access this route
        //             const res = {
        //                 name: 'Login',
        //                 query: { redirect: to.fullPath }
        //             }

        //             console.log("Check res from global nav guard: ", res)
        //             return res;
        //         }
        //     })
        // }
    }
})