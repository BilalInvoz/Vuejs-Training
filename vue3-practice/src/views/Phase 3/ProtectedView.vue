<template>
    <div>
        <h1>
            Hi, {{ store.username }}! You are now on protected route
        </h1>
        <button @click="handleLogOut">Log Out</button>
        <router-link :to="{name: 'Invoices'}">
            <button>Invoices</button>
        </router-link>
    </div>
</template>

<script>
import { usePiniaStore } from '@/stores/store';
import { useRouter } from 'vue-router';

export default {
    // Composition api for using pinia
    setup() {
        const store = usePiniaStore()
        const router = useRouter()

        console.log("Router from protected file: ", router)

        const handleLogOut = () => {
            store.logOut(router)
        }

        return {
            store,
            handleLogOut
        }
    }
}
</script>