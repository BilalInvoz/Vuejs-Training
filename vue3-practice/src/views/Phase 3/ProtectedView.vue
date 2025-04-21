<template>
    <div>
        <h1>
            Hi, {{ username }}! You are now on protected route
        </h1>
        <button @click="logOut">Log Out</button>
        <router-link :to="{name: 'Invoices'}">
            <button>Invoices</button>
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: window.user
        }
    },

    methods: {
        logOut() {
            window.user = null
            this.$router.push({ name: 'Home' })
        }
    }
}
</script>