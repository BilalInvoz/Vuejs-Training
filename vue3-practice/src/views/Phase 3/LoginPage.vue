<template>
    <div class="login">
        <form class="form" @submit.prevent="handleLogin">
            <h1>Login</h1>
            <label for="username">User name</label>
            <input v-model="store.username" name="username" type="text" class="input">
            <label for="password">Password</label>
            <input v-model="store.password" name="password" type="text" class="input">
            <button class="btn">Login</button>
        </form>
    </div>
</template>

<!-- Using Composition API -->
 <script>
import { usePiniaStore } from '@/stores/store'
import {useRouter, useRoute} from 'vue-router'

 export default {
    setup() {
        const route = useRoute()
        const router = useRouter()
        const store = usePiniaStore()

        const handleLogin = () => {
            store.login(route, router);
        }

        return {
            store,
            handleLogin
        }
    },
 }
 </script>